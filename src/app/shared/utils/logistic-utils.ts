import * as moment from 'moment';

import { AWPropertiesConstants } from '../constants/aw-properties-constants';
import { BidtStockMvtConstants } from '../constants/bidt-stock-mvt-constants';
import { BidtProcReqItemDTO } from '../types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../types/api-types/bidt-procurement-request-dto.interface';
import { BidtStockMvtDTO } from '../types/api-types/bidt-stock-mvt-dto.interface';
import { BidtTorItemDTO } from '../types/api-types/bidt-tor-item-dto.interface';
import { LabelValue } from '../types/label-value.interface';

import { ListUtils } from './list-utils';
import { NumberUtils } from './number-utils';
import { StringUtils } from './string-utils';

export interface ProcurementRequestItemRow {
  obj: BidtProcReqItemDTO;
  allNb: number;
  servedNb: number;
  bookedNb: number;
  notBookedNb: number;
  warehouseName: string | undefined;
  siteName: string | undefined;
}

export interface ProcurementRequestReverseItemRow {
  obj: BidtTorItemDTO;
  allNb: number;
  reversedNb: number;
  notReversedNb: number;
  warehouseReceiptName: string | undefined;
  siteReceiptName: string | undefined;
  warehouseIssueName: string | undefined;
  siteIssueName: string | undefined;
}

export interface ServerdAndBookedIndicators {
  bookedNb: number;
  notBookedNb: number;
  isServed: boolean;
  servedNb: number;
}

export class LogisticalUtils {
  public static sortCriticities(criticities: LabelValue<string>[]): LabelValue<string>[] {
    return criticities.sort((c1, _c2) => {
      if (c1.value === AWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE) {
        return -1;
      } else if (c1.value === AWPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE) {
        return 1;
      }

      return 0;
    });
  }

  public static getServedIndicators(
    procurementRequest: BidtProcurementRequestDTO
  ): ServerdAndBookedIndicators | undefined {
    if (procurementRequest.bidtWarehouseReceipt && procurementRequest.bidtWarehouseReceipt.whCategory) {
      const procurementRequestItems = this.buildProcurementRequestItemsRows(procurementRequest);

      return this.computeProcurementRequestProgress(procurementRequestItems);
    } else {
      return undefined;
    }
  }

  public static buildProcurementRequestItemsRows(procurementRequest: BidtProcurementRequestDTO) {
    return ListUtils.orEmpty(procurementRequest.bidtProcReqItems)
      .map((bidtProcReqItem) => this.buildProcurementRequestItemRow(bidtProcReqItem))
      .sort((x, y) => {
        if (x.obj.statusDate && y.obj.statusDate) {
          return moment(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
        } else if (x.obj.statusDate) {
          return -1;
        } else {
          return 1;
        }
      });
  }

  public static buildProcurementRequestItemRow(procurementRequestItem: BidtProcReqItemDTO): ProcurementRequestItemRow {
    const progress = this.computeProcurementRequestItemProgress(
      procurementRequestItem.workshopEntries,
      procurementRequestItem.requestedQuantity
    );

    return {
      obj: procurementRequestItem,
      allNb: progress.allNb,
      servedNb: progress.servedNb,
      bookedNb: progress.bookedNb,
      notBookedNb: progress.notBookedNb,
      warehouseName: undefined,
      siteName: undefined
    };
  }

  public static computeProcurementRequestReverseItemProgress(
    stockMvts: BidtStockMvtDTO[] | undefined
  ): { allNb: number; reversedNb: number; notReversedNb: number } {
    const filteredStockMvts = ListUtils.orEmpty(stockMvts).filter(
      (stockMvt) => stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT
    );
    const reversedStockMvts = filteredStockMvts.filter(
      (stockMvt) => stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );

    const allNb = filteredStockMvts
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);
    const reversedNb = reversedStockMvts
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);
    const notReversedNb = allNb - reversedNb;

    return { allNb, reversedNb, notReversedNb };
  }

  public static computeProcurementRequestItemProgress(
    stockMvts: BidtStockMvtDTO[] | undefined,
    requestedQuantity: string | undefined
  ): { allNb: number; bookedNb: number; notBookedNb: number; servedNb: number } {
    const filteredStockMvts = ListUtils.orEmpty(stockMvts).filter(
      (stockMvt) => stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT
    );
    const servedStockMvts = filteredStockMvts.filter(
      (stockMvt) => stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );
    const servedNb = servedStockMvts
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);
    const bookedNb = filteredStockMvts
      .filter(
        (stockMvt) =>
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY &&
          (!StringUtils.isNullOrEmpty(stockMvt.stockMvtSn) || !StringUtils.isNullOrEmpty(stockMvt.stockMvtBatchNumber))
      )
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);

    const notServedNb = StringUtils.isNullOrEmpty(requestedQuantity)
      ? 0
      : Math.max(0, NumberUtils.fromString(requestedQuantity as string) - servedNb - bookedNb);

    return { allNb: filteredStockMvts.length, bookedNb, notBookedNb: notServedNb, servedNb };
  }

  public static computeProcurementRequestProgress(
    procurementRequestItems: ProcurementRequestItemRow[]
  ): ServerdAndBookedIndicators {
    const procurementRequestQuantity = ListUtils.orEmpty(procurementRequestItems)
      .map((e) => e.obj.requestedQuantity)
      .filter((quantity) => !StringUtils.isNullOrEmpty(quantity))
      .map((quantity) => NumberUtils.fromString(quantity as string))
      .reduce((acc, x) => acc + x, 0);
    const procurementRequestProgress = ListUtils.orEmpty(procurementRequestItems).reduce(
      (a, b) => {
        return {
          bookedNb: a.bookedNb + b.bookedNb,
          notBookedNb: a.notBookedNb + b.notBookedNb,
          servedNb: a.servedNb + b.servedNb
        };
      },
      {
        bookedNb: 0,
        notBookedNb: 0,
        servedNb: 0
      }
    );

    return {
      bookedNb: procurementRequestProgress.bookedNb,
      notBookedNb: procurementRequestProgress.notBookedNb,
      isServed: procurementRequestProgress.servedNb === procurementRequestQuantity,
      servedNb: procurementRequestProgress.servedNb
    };
  }

  public static isReversedTransfer(mvts: BidtStockMvtDTO[]): boolean {
    return mvts.some(
      (mvt) =>
        mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT &&
        mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );
  }

  public static isReversingTransfer(mvts: BidtStockMvtDTO[]): boolean {
    return (
      mvts.some(
        (mvt) =>
          mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT &&
          mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ) &&
      mvts.some(
        (mvt) =>
          mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT &&
          mvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      )
    );
  }

  public static isExecutingTransfer(mvts: BidtStockMvtDTO[]): boolean {
    return (
      !mvts.some(
        (mvt) =>
          mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT &&
          mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ) &&
      !mvts.some(
        (mvt) =>
          mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT &&
          mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      )
    );
  }

  public static isWaitingTransfer(mvts: BidtStockMvtDTO[]): boolean {
    return mvts.some(
      (mvt) =>
        mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_TRANSFER &&
        mvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );
  }
}
