import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BidtStockMvtApi } from '../../../shared/api/bidt-stock-mvt.api';
import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { MaintenancePlanApi } from '../../../shared/api/maintenance-plan.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { UserProfileBusinessApi } from '../../../shared/api/user-profile-business.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindAllBidtStockMvtByCriteriaInput } from '../../../shared/types/api-input-types/bidt-stock-mvt/find-all-bidt-stock-mvt-by-criteria-input.interface';
import { SearchEventInputDTO } from '../../../shared/types/api-input-types/fleet-management/search-event-input-dto.interface';
import { CreateOrUpdateDefectTargetWorkOrderInput } from '../../../shared/types/api-input-types/maintenance-plan/create-or-update-defect-target-work-order-input.interface';
import { CreateWorkPackageFromEventInput } from '../../../shared/types/api-input-types/maintenance-plan/create-work-package-from-event-input.interface';
import { FindDefectTargetWorkOrderInput } from '../../../shared/types/api-input-types/maintenance-plan/find-defect-target-work-order-input.interface';
import { FindDefectTargetWorkPackageInput } from '../../../shared/types/api-input-types/maintenance-plan/find-defect-target-work-package-input.interface';
import { FindAllBirePnByCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-all-bire-pn-by-criteria-input.interface';
import { FindAllBireVariantVersionByFamilyFunctionInput } from '../../../shared/types/api-input-types/product-structure-management/find-all-bire-variant-version-by-family-function-input.interface';
import { FindBireEvolutionsByEvolutionCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-evolution-criteria-input.interface';
import { FindAllBireTaskByCriteriaInput } from '../../../shared/types/api-input-types/task-management/find-all-bire-task-by-criteria-inpuy.interface';
import { BidoNotificationOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { CreateWorkPackageFromEventOutput } from '../../../shared/types/api-output-types/maintenance-plan/create-work-package-from-event-output.interface';
import { BidmProjectDTO } from '../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoAttributeDTOId } from '../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoAttributeValueDTO } from '../../../shared/types/api-types/bido-attribute-value-dto.interface';
import { BidoCustomerDTOId } from '../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { BidoNotificationAttributeDTO } from '../../../shared/types/api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationDTOId } from '../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoNotificationTypeDTO } from '../../../shared/types/api-types/bido-notification-type-dto.interface';
import { BidtStockMvtDTO } from '../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { BireVariantVersionDTO } from '../../../shared/types/api-types/bire-variant-version-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { StringUtils } from '../../../shared/utils/string-utils';

@Injectable()
export class EventService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly maintenancePlanApi: MaintenancePlanApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Bidt stock mvt api
   *************************************************************************/

  public findAllDefectPartsByCriteria(input: FindAllBidtStockMvtByCriteriaInput): Observable<BidtStockMvtDTO[]> {
    return super.post<FindAllBidtStockMvtByCriteriaInput, BidtStockMvtDTO[]>(
      this.bidtStockMvtApi.findAllDefectPartsByCriteria,
      input
    );
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public findAllFlInStructureByEquipmentCodeForDefect(equipmentCode: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.fleetBusinessApi.findAllFlInStructureByEquipmentCodeForDefect,
      equipmentCode
    );
  }

  public findNotificationDateOrderCriteria(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetBusinessApi.findNotificationDateOrderCriteria);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public checkBidoFlExistence(flCode: string): Observable<boolean> {
    if (StringUtils.isNullOrEmpty(flCode)) {
      return of(false);
    } else {
      return super.post<string, boolean>(this.fleetManagementApi.checkBidoFlExistence, flCode);
    }
  }

  public findAllBidoAttributeByAttributeCategory(category: string): Observable<BidoAttributeDTO[]> {
    return super.post<string, BidoAttributeDTO[]>(
      this.fleetManagementApi.findBidoAttributesByAttributeCategory,
      category
    );
  }

  public findAllBidoDocumentationByNotificationCode(notificationCode: string): Observable<BidoDocumentationDTO[]> {
    return super.post<string, BidoDocumentationDTO[]>(
      this.fleetManagementApi.findAllBidoDocumentationByNotificationCode,
      notificationCode
    );
  }

  public findAllBidoNotificationAttributeByNotificationCode(
    notificationId: BidoNotificationDTOId
  ): Observable<BidoNotificationAttributeDTO[]> {
    return super.post<BidoNotificationDTOId, BidoNotificationAttributeDTO[]>(
      this.fleetManagementApi.findAllBidoNotificationAttributeByNotificationCode,
      notificationId
    );
  }

  public findAllBidoNotificationTypeByTypeCategory(typeCategory: string): Observable<BidoNotificationTypeDTO[]> {
    return super.post<string, BidoNotificationTypeDTO[]>(
      this.fleetManagementApi.findAllBidoNotificationTypeByTypeCategory,
      typeCategory
    );
  }

  public findBidoCustomer(customerId: BidoCustomerDTOId): Observable<BidoCustomerDTO> {
    return super.post<BidoCustomerDTOId, BidoCustomerDTO>(this.fleetManagementApi.findBidoCustomer, customerId);
  }

  public findBidoEquipment(equipmentId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, equipmentId);
  }

  public findBidoNotification(notificationId: BidoNotificationDTOId): Observable<BidoNotificationDTO> {
    return super.post<BidoNotificationDTOId, BidoNotificationDTO>(
      this.fleetManagementApi.findBidoNotification,
      notificationId
    );
  }

  public getEquipmentRepresentation(equipment: BidoEquipmentDTO): Observable<string> {
    return super.post<BidoEquipmentDTO, string>(this.fleetManagementApi.getEquipmentRepresentation, equipment);
  }

  /**************************************************************************
   * Maintenance plan api
   *************************************************************************/

  public createWorkPackageFromEvent(
    input: CreateWorkPackageFromEventInput
  ): Observable<CreateWorkPackageFromEventOutput> {
    return super.post<CreateWorkPackageFromEventInput, CreateWorkPackageFromEventOutput>(
      this.maintenancePlanApi.createWorkPackageFromEvent,
      input
    );
  }

  public createOrUpdateDefectTargetWorkOrder(
    input: CreateOrUpdateDefectTargetWorkOrderInput
  ): Observable<BidmWorkOrderDTO> {
    return super.post<CreateOrUpdateDefectTargetWorkOrderInput, BidmWorkOrderDTO>(
      this.maintenancePlanApi.createOrUpdateDefectTargetWorkOrder,
      input
    );
  }

  public findDefectTargetWorkOrder(input: FindDefectTargetWorkOrderInput): Observable<BidmWorkOrderDTO> {
    return super.post<FindDefectTargetWorkOrderInput, BidmWorkOrderDTO>(
      this.maintenancePlanApi.findDefectTargetWorkOrder,
      input
    );
  }

  public findDefectTargetWorkPackage(input: FindDefectTargetWorkPackageInput): Observable<BidmProjectDTO> {
    return super.post<FindDefectTargetWorkPackageInput, BidmProjectDTO>(
      this.maintenancePlanApi.findDefectTargetWorkPackage,
      input
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public checkAtaCodeExistence(item: BireItemDTO): Observable<boolean> {
    if (
      StringUtils.isNullOrEmpty(item.chapter) ||
      StringUtils.isNullOrEmpty(item.section) ||
      StringUtils.isNullOrEmpty(item.subject) ||
      StringUtils.isNullOrEmpty(item.sheet) ||
      StringUtils.isNullOrEmpty(item.marks)
    ) {
      return of(false);
    } else {
      return super.post<BireItemDTO, boolean>(this.productStructureManagementApi.checkAtaCodeExistence, item);
    }
  }

  public checkBirePnExistence(pnCode: string): Observable<boolean> {
    if (StringUtils.isNullOrEmpty(pnCode)) {
      return of(false);
    } else {
      return super.post<string, boolean>(this.productStructureManagementApi.checkBirePnExistence, pnCode);
    }
  }

  public findAllBirePnByCriteria(criteria: FindAllBirePnByCriteriaInput): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindAllBirePnByCriteriaInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findAllBirePnByCriteria,
      criteria
    );
  }

  public findAllBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSite);
  }

  public findAllDelayAuthorizedUnit(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllDelayAuthorizedUnit);
  }

  public findAllDelayCategory(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllDelayCategory);
  }

  /**************************************************************************
   * Task management api
   *************************************************************************/

  public findAllBireTaskByCriteria(
    criteria: FindAllBireTaskByCriteriaInput
  ): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<FindAllBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findAllBireTaskByCriteria,
      criteria
    );
  }

  public findAllBireTaskGroup(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroup);
  }

  /**************************************************************************
   * User profile business api
   *************************************************************************/

  public isBuildingBlockInstalled(buildingBlock: string): Observable<boolean> {
    return super.post<string, boolean>(this.userProfileBusinessApi.isBuildingBlockInstalled, buildingBlock);
  }

  public findBidoNotificationsBySearchCriteria(
    eventCriteriaInputDTO: SearchEventInputDTO
  ): Observable<SearchResultsDTO<BidoNotificationOutputDTO>> {
    return super.post<SearchEventInputDTO, SearchResultsDTO<BidoNotificationOutputDTO>>(
      this.fleetManagementApi.findBidoNotificationsBySearchCriteria,
      eventCriteriaInputDTO
    );
  }

  public findAllBidoCustomer(): Observable<BidoCustomerDTO[]> {
    return super.post<void, BidoCustomerDTO[]>(this.fleetManagementApi.findAllBidoCustomer);
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public findAllWarehouse(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }

  public findAllBireVariantVersionByFamilyFunction(
    familyFunction: string | undefined
  ): Observable<BireVariantVersionDTO[]> {
    const param = {
      familyFunction
    };

    return super.post<FindAllBireVariantVersionByFamilyFunctionInput, BireVariantVersionDTO[]>(
      this.productStructureManagementApi.findAllBireVariantVersionByFamilyFunction,
      param
    );
  }

  public findAllBidoFleetByCriteria(criteria: BidoFleetDTO): Observable<BidoFleetDTO[]> {
    return super.post<BidoFleetDTO, BidoFleetDTO[]>(this.fleetManagementApi.findAllBidoFleetByCriteria, criteria);
  }

  public findAllBidoAttributeByAttributeId(attributeId: number): Observable<BidoAttributeValueDTO[]> {
    return super.post<number, BidoAttributeValueDTO[]>(
      this.fleetManagementApi.findBidoAttributeValuesByAttributeId,
      attributeId
    );
  }

  /**
   * Gets event status
   */
  public getEventStatusValues(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEventStatusValues);
  }

  // To bind the evolution popup
  public findBireEvolutionsByEvolutionCriteria(
    evolution: BireEvolutionDTO,
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const params: FindBireEvolutionsByEvolutionCriteriaInput = {
      bireEvolutionDTO: evolution,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBireEvolutionsByEvolutionCriteriaInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
      params
    );
  }

  /**
   * Gets atribute
   */
  public findBidoAttribute(sourceId: BidoAttributeDTOId): Observable<BidoAttributeDTO> {
    return super.post<BidoAttributeDTOId, BidoAttributeDTO>(this.fleetManagementApi.findBidoAttribute, sourceId);
  }

  public getAssetSourceSystemIdList(bireId: BidoAttributeDTOId): Observable<LabelValue<string>[]> {
    return super.post<BidoAttributeDTOId, LabelValue<string>[]>(
      this.fleetManagementApi.getAssetSourceSystemIdList,
      bireId
    );
  }

  public removeBidoNotification(bireId: BidoNotificationDTOId[]): Observable<String> {
    return super.post<BidoNotificationDTOId[], String>(this.fleetManagementApi.removeBidoNotification, bireId);
  }

  public removeBidoNotificationFmdByNotificationCode(notificationCode: string): Observable<void> {
    return super.post<string, void>(
      this.fleetManagementApi.removeBidoNotificationFMDByNotificationCode,
      notificationCode
    );
  }
}
