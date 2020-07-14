import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HBidoEquipmentDTO } from '../../../../../../generated_files/api-types/h-bido-equipment-dto.interface';
import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BonitaApi } from '../../../../shared/api/bonita/bonita.api';
import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetHistoryApi } from '../../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { UserProfileBusinessApi } from '../../../../shared/api/user-profile-business.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { AssetAtDateInput } from '../../../../shared/types/api-input-types/fleet-business/asset-at-date-input.interface';
import { FindBidoEquipmentByEquipmentCodeFromDateInput } from '../../../../shared/types/api-input-types/fleet-history/find-bido-equipment-by-equipment-code-from-date-input.interface';
import { DefectContextOutput } from '../../../../shared/types/api-input-types/fleet-management/defect-context-output.interface';
import { SendEventNotificationToContactsDTO } from '../../../../shared/types/api-input-types/fleet-management/send-event-notification-to-contacts-dto.interface';
import { UpdateFieldsOfBidoDocumentationInput } from '../../../../shared/types/api-input-types/fleet-management/update-fields-of-bido-documentation-input.interface';
import { FindAllBirePnByCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-bire-pn-by-criteria-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindAllBireTaskByCriteriaInput } from '../../../../shared/types/api-input-types/task-management/find-all-bire-task-by-criteria-inpuy.interface';
import { SaveEventInput } from '../../../../shared/types/api-input-types/task-management/save-event-input.interface';
import { BidoDocumentationFMDInput } from '../../../../shared/types/api-output-types/fleet-management/bido-documentation-fmd-input.interface';
import { BidoEventSymptomTableOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-event-symptom-table-output-dto.interface';
import { BidoNotificationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { DefectMELAlertObjectOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/defect-mel-alert-object-output-dto.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { FMDReferenceOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/fmd-reference-output-dto.interface';
import { EventOVSOutputDTO } from '../../../../shared/types/api-output-types/ovs-popup/event-ovs-output-dto.interface';
import { AccessRightQueryDTO } from '../../../../shared/types/api-types/access-right-query-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoDocumentationDTOId } from '../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentCounterDTOId } from '../../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentTableDTO } from '../../../../shared/types/api-types/bido-equipment-table-dto.interface';
import { BidoEventExtensionDTO } from '../../../../shared/types/api-types/bido-event-extension-dto.interface';
import { BidoFmdDTO } from '../../../../shared/types/api-types/bido-fmd-dto.interface';
import { BidoNotificationAttributeDTOId } from '../../../../shared/types/api-types/bido-notification-attribute-dto-id.interface';
import { BidoNotificationAttributeDTO } from '../../../../shared/types/api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationContactDTO } from '../../../../shared/types/api-types/bido-notification-contact-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoNotificationEvolutionDTO } from '../../../../shared/types/api-types/bido-notification-evolution-dto.interface';
import { BidoNotificationTypeDTO } from '../../../../shared/types/api-types/bido-notification-type-dto.interface';
import { BidoParameterDTO } from '../../../../shared/types/api-types/bido-parameter-dto.interface';
import { BidoRootCauseDTO } from '../../../../shared/types/api-types/bido-root-cause-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { EventCriteriaInputDTO } from '../../../../shared/types/api-types/event-criteria-input-dto.interface';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';
import { HBidoNotificationAttributeDTO } from '../../../../shared/types/api-types/h-bido-notification-attribute-dto.interface';
import { HBidoNotificationDTO } from '../../../../shared/types/api-types/h-bido-notification-dto.interface';
import { MailApi } from '../../../../shared/types/api-types/mail.api';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { WorkPostponementAccepted } from '../../../../shared/types/work-postponement-accepted.interface';
import { WorkPostponementRefused } from '../../../../shared/types/work-postponement-refused.interface';

@Injectable()
export class EventCreateService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly aircraftManagementApi: AircraftMaintenanceApi,
    private readonly fleetHistoryApi: FleetHistoryApi,
    private readonly propertiesService: PropertiesService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly mailApi: MailApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly bonitaApi: BonitaApi
  ) {
    super(http, appConfigService);
  }

  /**
   * Gets event category
   */
  public findAllBidoNotificationTypeByTypeCategory(typeCategory: string): Observable<BidoNotificationTypeDTO[]> {
    return super.post<string, BidoNotificationTypeDTO[]>(
      this.fleetManagementApi.findAllBidoNotificationTypeByTypeCategory,
      typeCategory
    );
  }

  /**
   * Gets event category
   */
  public findAllBidoNotificationAttributeByNotificationCode(
    bidoNotificationDTOId: BidoNotificationDTOId
  ): Observable<BidoNotificationAttributeDTO[]> {
    return super.post<BidoNotificationDTOId, BidoNotificationAttributeDTO[]>(
      this.fleetManagementApi.findAllBidoNotificationAttributeByNotificationCode,
      bidoNotificationDTOId
    );
  }

  /**
   * Gets event status
   */
  public getEventStatusValues(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEventStatusValues);
  }

  /**
   * Create EVENT
   */
  public createBidoNotification(bidoNotificationDTO: BidoNotificationDTO): Observable<BidoNotificationDTOId> {
    return super.post<BidoNotificationDTO, BidoNotificationDTOId>(
      this.fleetManagementApi.createBidoNotification,
      bidoNotificationDTO
    );
  }

  public generateEstimatedMeasures(bidoNotificationDTO: BidoNotificationDTO): Observable<void> {
    return super.post<BidoNotificationDTO, void>(
      this.fleetManagementApi.generateEstimatedMeasures,
      bidoNotificationDTO
    );
  }

  /**
   * UPDATE EVENT
   */
  public saveEvent(saveEventInput: SaveEventInput): Observable<void> {
    return super.post<SaveEventInput, void>(this.fleetManagementApi.saveEvent, saveEventInput);
  }

  public addOrUpdate(input: BidtStockMvtDTO): Observable<BidtStockMvtDTO> {
    return super.post<BidtStockMvtDTO, BidtStockMvtDTO>(this.bidtStockMvtApi.addOrUpdate, input);
  }

  /**
   * Finds bido notification by notification code
   */
  public findBidoNotification(bidoNotificationDTOId: BidoNotificationDTOId): Observable<BidoNotificationDTO> {
    return super.post<BidoNotificationDTOId, BidoNotificationDTO>(
      this.fleetManagementApi.findBidoNotification,
      bidoNotificationDTOId
    );
  }

  public findBidoEquipment(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipment,
      bidoEquipmentDTOId
    );
  }

  public fetchMeasureTableData(
    bidoEquipmentDTO: BidoEquipmentDTO
  ): Observable<FindBidoCounterReferencesByEquipmentCodeOutput[]> {
    return super.post<BidoEquipmentDTO, FindBidoCounterReferencesByEquipmentCodeOutput[]>(
      this.assetManagementApi.fetchMeasureTableData,
      bidoEquipmentDTO
    );
  }

  public assetAtDateForMeasureTab(
    assetAtDateInput: AssetAtDateInput
  ): Observable<FindBidoCounterReferencesByEquipmentCodeOutput[]> {
    return super.post<AssetAtDateInput, FindBidoCounterReferencesByEquipmentCodeOutput[]>(
      this.fleetBusinessApi.assetAtDateForMeasuresTab,
      assetAtDateInput
    );
  }

  public fetchWorkPostponementEvolutionNumber(notificationCode: string): Observable<string> {
    return super.post<string, string>(this.fleetManagementApi.fetchWorkPostponementEvolutionNumber, notificationCode);
  }

  public findHBidoNotifications(dTOId: BidoNotificationDTOId): Observable<SearchResultsDTO<HBidoNotificationDTO>> {
    return super.post<BidoNotificationDTOId, SearchResultsDTO<HBidoNotificationDTO>>(
      this.fleetHistoryApi.findHBidoNotifications,
      dTOId
    );
  }

  public findHBidoNotificationAttributesByAttributeId(
    dTOId: BidoNotificationAttributeDTOId[]
  ): Observable<HBidoNotificationAttributeDTO[]> {
    return super.post<BidoNotificationDTOId[], HBidoNotificationAttributeDTO[]>(
      this.fleetHistoryApi.findHBidoNotificationAttributesByAttributeId,
      dTOId
    );
  }

  public findLinkingEventData(
    eventCriteriaInputDTO: EventCriteriaInputDTO
  ): Observable<SearchResultsDTO<BidoNotificationOutputDTO>> {
    return super.post<EventCriteriaInputDTO, SearchResultsDTO<BidoNotificationOutputDTO>>(
      this.fleetManagementApi.findLinkingEventData,
      eventCriteriaInputDTO
    );
  }

  public getMeasureDetailTableData(
    bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId
  ): Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]> {
    return super.post<BidoEquipmentCounterDTOId, FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>(
      this.fleetBusinessApi.findBidoMeasuresByEquipmentAndCounterCodes,
      bidoEquipmentCounterDTOId
    );
  }

  public generateE5XFileFromFMD(input: BidoDocumentationFMDInput): Observable<FileContentDTO> {
    return super.post<BidoDocumentationFMDInput, FileContentDTO>(this.fleetBusinessApi.generateE5XFileFromFmd, input);
  }

  public getFmdReport(eventCode: string): Observable<Uint8Array> {
    return super.post<string, Uint8Array>(this.fleetBusinessApi.getFmdReport, eventCode);
  }

  public updateBidoNotificationACRS(bidoNotificationDTO: BidoNotificationDTO): Observable<void> {
    return super.post<BidoNotificationDTO, void>(
      this.fleetManagementApi.updateBidoNotificationACRS,
      bidoNotificationDTO
    );
  }

  public getFunctionLocationLabel(bidoNotificationDTO: BidoNotificationDTO): Observable<string> {
    return super.post<BidoNotificationDTO, string>(
      this.fleetManagementApi.getFunctionLocationLabel,
      bidoNotificationDTO
    );
  }

  public findBidoAttributesByAttributeCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.fleetManagementApi.findBidoAttributesByAttributeCategory,
      category
    );
  }

  public generateAPRSCertificateForACRSEvent(bidoNotificationDTO: BidoNotificationDTO): Observable<FileContentDTO> {
    return super.post<BidoNotificationDTO, FileContentDTO>(
      this.aircraftManagementApi.generateAPRSCertificateForACRSEvent,
      bidoNotificationDTO
    );
  }

  public generateEASACertificateFromACRSEvent(bidoNotificationDTO: BidoNotificationDTO): Observable<FileContentDTO> {
    return super.post<BidoNotificationDTO, FileContentDTO>(
      this.aircraftManagementApi.generateEASACertificateFromACRSEvent,
      bidoNotificationDTO
    );
  }

  public findEvent(criteria: EventCriteriaInputDTO): Observable<SearchResultsDTO<EventOVSOutputDTO>> {
    return super.post<EventCriteriaInputDTO, SearchResultsDTO<EventOVSOutputDTO>>(
      this.fleetManagementApi.findEventsBySearchCriteria,
      criteria
    );
  }

  public findBidoNotificationContactsByNotificationCode(code: string): Observable<BidoNotificationContactDTO[]> {
    return super.post<string, BidoNotificationContactDTO[]>(
      this.fleetManagementApi.findBidoNotificationContactsByNotificationCode,
      code
    );
  }

  public findBidoNotificationEvolutionsByNotificationCode(code: string): Observable<BidoNotificationEvolutionDTO[]> {
    return super.post<string, BidoNotificationEvolutionDTO[]>(
      this.fleetManagementApi.findBidoNotificationEvolutionsByNotificationCode,
      code
    );
  }

  public getOperationalStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
  }

  public getWorkOrderForEvent(code: string): Observable<string> {
    return super.post<string, string>(this.fleetManagementApi.getWorkOrderForEvent, code);
  }

  public findBidoEquipmentsBySearchCriteria(criteria: BidoEquipmentDTO): Observable<BidoEquipmentTableDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentTableDTO[]>(this.fleetManagementApi.findFleetAllAssets, criteria);
  }

  public findAllBirePnByCriteria(criteria: FindAllBirePnByCriteriaInput): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindAllBirePnByCriteriaInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findAllBirePnByCriteria,
      criteria
    );
  }

  public findBireItemsBySearchCriteria(
    criteria: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      criteria
    );
  }

  public findBireTasksByCriteria(criteria: FindAllBireTaskByCriteriaInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<FindAllBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findAllBireTaskByCriteriaInput,
      criteria
    );
  }

  public sendEventNotificationToContacts(
    sendEventNotificationToContactsDTO: SendEventNotificationToContactsDTO
  ): Observable<void> {
    return super.post<SendEventNotificationToContactsDTO, void>(
      this.mailApi.sendEventNotificationToContacts,
      sendEventNotificationToContactsDTO
    );
  }

  public sendEventNotificationToContactsAlternate(
    sendEventNotificationToContactsDTO: SendEventNotificationToContactsDTO
  ): Observable<void> {
    return super.post<SendEventNotificationToContactsDTO, void>(
      this.mailApi.sendEventNotificationToContactsAlternate,
      sendEventNotificationToContactsDTO
    );
  }

  public findAllBidoDocumentationByNotificationCode(notificationCode: String): Observable<BidoDocumentationDTO[]> {
    return super.post<String, BidoDocumentationDTO[]>(
      this.fleetManagementApi.findAllBidoDocumentationByNotificationCode,
      notificationCode
    );
  }

  public getEquipmentName(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<string> {
    return super.post<BidoEquipmentDTOId, string>(this.fleetManagementApi.getEquipmentName, bidoEquipmentDTOId);
  }

  public haspropertyByFamilyCode(familyCode: string): Observable<boolean> {
    return super.post<string, boolean>(this.fleetManagementApi.haspropertyByFamilyCode, familyCode);
  }

  public hasFmdNotClosed(notificationCode: string): Observable<boolean> {
    return super.post<string, boolean>(this.fleetManagementApi.hasFmdNotClosed, notificationCode);
  }

  public findBidoEventExtensionsTypedContextByNotificationCode(
    notificationCode: string
  ): Observable<BidoEventSymptomTableOutputDTO> {
    return super.post<string, BidoEventSymptomTableOutputDTO>(
      this.fleetManagementApi.findBidoEventExtensionsTypedContextByNotificationCode,
      notificationCode
    );
  }

  public findBidoEventExtensionsTypedSymptomByNotificationCode(
    notificationCode: string
  ): Observable<BidoEventSymptomTableOutputDTO[]> {
    return super.post<string, BidoEventSymptomTableOutputDTO[]>(
      this.fleetManagementApi.findBidoEventExtensionsTypedSymptomByNotificationCode,
      notificationCode
    );
  }

  public findAllBidoExtensionList(extensionType: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findAllBidoExtensionList, extensionType);
  }

  public getAddedSymptomParameterList(bidoEventExtensionDTO: BidoEventExtensionDTO): Observable<BidoParameterDTO[]> {
    return super.post<BidoEventExtensionDTO, BidoParameterDTO[]>(
      this.fleetManagementApi.getAddedSymptomParameterList,
      bidoEventExtensionDTO
    );
  }

  public getCsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getCsnLabelForAirworthinessControl);
  }

  public getTsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
  }

  public openXLSFormat(notificationCode: string): Observable<FileContentDTO> {
    return super.post<string, FileContentDTO>(this.fleetBusinessApi.getEventXlsReport, notificationCode);
  }

  public generateDefectCard(notificationData: BidoNotificationDTO): Observable<FileContentDTO> {
    return super.post<BidoNotificationDTO, FileContentDTO>(this.fleetBusinessApi.generateDefectCard, notificationData);
  }

  public calculateMELAlert(notificationData: BidoRootCauseDTO): Observable<DefectMELAlertObjectOutputDTO> {
    return super.post<BidoRootCauseDTO, DefectMELAlertObjectOutputDTO>(
      this.fleetManagementApi.calculateMELAlert,
      notificationData
    );
  }

  public initializeTCMap(familyVariantCode: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.initializeTCMap, familyVariantCode);
  }

  public findBidoCustomersBySearchCriteriaFMD(code: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findBidoCustomersBySearchCriteriaFMD, code);
  }

  public findE5XEventTypesByFmdEventType(code: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findE5XEventTypesByFmdEventType, code);
  }

  public findBidoFmdsByNotificationCode(notificationCode: string): Observable<BidoFmdDTO[]> {
    return super.post<string, BidoFmdDTO[]>(this.fleetManagementApi.findBidoFmdsByNotificationCode, notificationCode);
  }

  public generateFmdByEventCode(notificationCode: string): Observable<BidoFmdDTO> {
    return super.post<string, BidoFmdDTO>(this.fleetBusinessApi.generateFmdByEventCode, notificationCode);
  }

  public generateFdeByEventCode(notificationCode: string): Observable<BidoFmdDTO> {
    return super.post<string, BidoFmdDTO>(this.fleetBusinessApi.generateFdeByEventCode, notificationCode);
  }

  public saveFMDEvent(bidoFmdDTO: BidoFmdDTO): Observable<BidoFmdDTO> {
    return super.post<BidoFmdDTO, BidoFmdDTO>(this.fleetManagementApi.saveFMDEvent, bidoFmdDTO);
  }

  public getFDMIsFDE(fvCode: string): Observable<boolean> {
    return super.post<string, boolean>(this.fleetManagementApi.getFDMIsFDE, fvCode);
  }

  public findBidoDocumentationsByMandantAndNotificationCodeAndFmdId(
    input: BidoDocumentationFMDInput
  ): Observable<BidoDocumentationDTO[]> {
    return super.post<BidoDocumentationFMDInput, BidoDocumentationDTO[]>(
      this.fleetManagementApi.findBidoDocumentationsByMandantAndNotificationCodeAndFmdId,
      input
    );
  }

  public hasManageRights(): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: BidoFunctionTypeConstants.UC_FM_FMD,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasManageRights, accessRightQueryDTO);
  }

  public setFMDReferenceDTO(reference: string): Observable<FMDReferenceOutputDTO> {
    return super.post<string, FMDReferenceOutputDTO>(this.fleetManagementApi.setFMDReferenceDTO, reference);
  }

  public updateFieldsOfBidoDocumentationFMD(input: UpdateFieldsOfBidoDocumentationInput[]): Observable<void> {
    return super.post<UpdateFieldsOfBidoDocumentationInput[], void>(
      this.fleetManagementApi.updateFieldsOfBidoDocumentationFMD,
      input
    );
  }

  public removeBidoDocumentationFMD(input: BidoDocumentationDTOId[]): Observable<void> {
    return super.post<BidoDocumentationDTOId[], void>(this.fleetManagementApi.removeBidoDocumentationFmd, input);
  }

  public findBidmWorkOrderByMandantAndWoCode(woCode: string): Observable<BidmWorkOrderDTO> {
    return super.post<string, BidmWorkOrderDTO>(this.aircraftManagementApi.findBidmWorkOrderByMandantAndWoCode, woCode);
  }

  public acceptWorkPostponementRequest(input: WorkPostponementAccepted): Observable<BidoNotificationDTO> {
    return super.post<WorkPostponementAccepted, BidoNotificationDTO>(
      this.fleetBusinessApi.acceptWorkPostponementRequest,
      input
    );
  }

  public refuseWorkPostponementRequest(input: WorkPostponementRefused): Observable<BidoNotificationDTO> {
    return super.post<WorkPostponementRefused, BidoNotificationDTO>(
      this.fleetBusinessApi.refuseWorkPostponementRequest,
      input
    );
  }

  public getDefectContextInfo(input: BidoNotificationDTO): Observable<DefectContextOutput> {
    return super.post<BidoNotificationDTO, DefectContextOutput>(this.fleetManagementApi.getDefectContextInfo, input);
  }

  public findHFBidoEquipmentByEquipmentCodeFromDate(
    findBidoEquipmentByEquipmentCodeFromDateInput: FindBidoEquipmentByEquipmentCodeFromDateInput
  ): Observable<HBidoEquipmentDTO> {
    return super.post<FindBidoEquipmentByEquipmentCodeFromDateInput, HBidoEquipmentDTO>(
      this.fleetHistoryApi.findBidoEquipmentByEquipmentCodeFromDate,
      findBidoEquipmentByEquipmentCodeFromDateInput
    );
  }

  public submitRTAToCentral(bidmWorkOrderDTOId: BidmWorkOrderDTOId): Observable<void> {
    return super.post<BidmWorkOrderDTOId, void>(this.bonitaApi.submitRTAToCentral, bidmWorkOrderDTOId);
  }
}
