(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administration-administration-module~administration-business-partner-business-partner-module~32aabe18"],{

/***/ "./src/app/shared/utils/dto-utils.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/utils/dto-utils.ts ***!
  \*******************************************/
/*! exports provided: DTOUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTOUtils", function() { return DTOUtils; });
var DTOUtils = /** @class */ (function () {
    function DTOUtils() {
    }
    /*
     * Not generated methods
     */
    DTOUtils.equalsBidoCusCustomerDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.bidCustomerCode === obj2.bidCustomerCode && obj1.customerCode === obj2.customerCode;
    };
    /*
     * Generated methods
     */
    // public static equalsBidmConfControlDTO(obj1: BidmConfControlDTO, obj2: BidmConfControlDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.confControlId === obj2.confControlId;
    // }
    // public static equalsBidmDocumentDTO(obj1: BidmDocumentDTO, obj2: BidmDocumentDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.documentId === obj2.documentId;
    // }
    // public static equalsBidmFindingDTO(obj1: BidmFindingDTO, obj2: BidmFindingDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.findingId === obj2.findingId;
    // }
    // public static equalsBidmOperationDTO(obj1: BidmOperationDTO, obj2: BidmOperationDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.woId === obj2.woId
    //         && obj1.bireOpeCode === obj2.bireOpeCode
    //         && obj1.bireOpeVersion === obj2.bireOpeVersion;
    // }
    // public static equalsBidmProjectDTO(obj1: BidmProjectDTO, obj2: BidmProjectDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId;
    // }
    // public static equalsBidmTimeTrackingDTO(obj1: BidmTimeTrackingDTO, obj2: BidmTimeTrackingDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.timeTrackingId === obj2.timeTrackingId;
    // }
    // public static equalsBidmWorkOrderDTO(obj1: BidmWorkOrderDTO, obj2: BidmWorkOrderDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.woId === obj2.woId;
    // }
    DTOUtils.equalsBidoAttributeDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.attributeId === obj2.attributeId;
    };
    DTOUtils.equalsBidoContactDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.contactName === obj2.contactName;
    };
    // public static equalsBidoCounterReferenceDTO(obj1: BidoCounterReferenceDTO, obj2: BidoCounterReferenceDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.counterCode === obj2.counterCode;
    // }
    DTOUtils.equalsBidoCustomerDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.customerCode === obj2.customerCode;
    };
    DTOUtils.equalsBidoCustomerEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.customerCode === obj2.customerCode &&
            obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.evolutionType === obj2.evolutionType);
    };
    // public static equalsBidoDamageDTO(obj1: BidoDamageDTO, obj2: BidoDamageDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.damageCode === obj2.damageCode;
    // }
    DTOUtils.equalsBidoDocumentationDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.docCode === obj2.docCode;
    };
    // public static equalsBidoEquipmentAttributeDTO(obj1: BidoEquipmentAttributeDTO, obj2: BidoEquipmentAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.equipmentCode === obj2.equipmentCode
    //         && obj1.attributeId === obj2.attributeId;
    // }
    // public static equalsBidoEquipmentCounterDTO(obj1: BidoEquipmentCounterDTO, obj2: BidoEquipmentCounterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.equipmentCode === obj2.equipmentCode
    //         && obj1.counterCode === obj2.counterCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.ratingCode === obj2.ratingCode;
    // }
    DTOUtils.equalsBidoEquipmentDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.equipmentCode === obj2.equipmentCode;
    };
    DTOUtils.equalsBidoEquipmentEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.equipmentCode === obj2.equipmentCode &&
            obj1.evolutionType === obj2.evolutionType &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber);
    };
    // public static equalsBidoEquipmentUsageDTO(obj1: BidoEquipmentUsageDTO, obj2: BidoEquipmentUsageDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.equipmentCode === obj2.equipmentCode
    //         && obj1.unitCode === obj2.unitCode
    //         && obj1.monthCode === obj2.monthCode;
    // }
    DTOUtils.equalsBidoEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.evolutionType === obj2.evolutionType &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber);
    };
    // public static equalsBidoExtensionDTO(obj1: BidoExtensionDTO, obj2: BidoExtensionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.extensionCode === obj2.extensionCode;
    // }
    // public static equalsBidoFamilyVariantDTO(obj1: BidoFamilyVariantDTO, obj2: BidoFamilyVariantDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.familyVariantCode === obj2.familyVariantCode;
    // }
    // public static equalsBidoFlDTO(obj1: BidoFlDTO, obj2: BidoFlDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.flCode === obj2.flCode;
    // }
    DTOUtils.equalsBidoFleetDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.fleetId === obj2.fleetId;
    };
    // public static equalsBidoFlEquipmentDTO(obj1: BidoFlEquipmentDTO, obj2: BidoFlEquipmentDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.equipmentCode === obj2.equipmentCode
    //         && obj1.flCode === obj2.flCode;
    // }
    DTOUtils.equalsBidoFlModelDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.flCode === obj2.flCode &&
            obj1.modelCode === obj2.modelCode &&
            obj1.familyCode === obj2.familyCode &&
            obj1.variantCode === obj2.variantCode);
    };
    // public static equalsBidoFlVariantDTO(obj1: BidoFlVariantDTO, obj2: BidoFlVariantDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.flCode === obj2.flCode
    //         && obj1.familyVariantCode === obj2.familyVariantCode;
    // }
    // public static equalsBidoFmdDTO(obj1: BidoFmdDTO, obj2: BidoFmdDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.notificationCode === obj2.notificationCode
    //         && obj1.fmdId === obj2.fmdId;
    // }
    DTOUtils.equalsBidoFunctionTypeDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.functionCode === obj2.functionCode;
    };
    // public static equalsBidoMandantDTO(obj1: BidoMandantDTO, obj2: BidoMandantDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     retur;
    // }
    // public static equalsBidoMandantUserDTO(obj1: BidoMandantUserDTO, obj2: BidoMandantUserDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.userId === obj2.userId;
    // }
    // public static equalsBidoMeasureDTO(obj1: BidoMeasureDTO, obj2: BidoMeasureDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.measureId === obj2.measureId;
    // }
    // public static equalsBidoMissionDTO(obj1: BidoMissionDTO, obj2: BidoMissionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.missionCode === obj2.missionCode;
    // }
    // public static equalsBidoMissionEquipmentDTO(obj1: BidoMissionEquipmentDTO, obj2: BidoMissionEquipmentDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.missionCode === obj2.missionCode
    //         && obj1.equipmentCode === obj2.equipmentCode
    //         && obj1.occurrence === obj2.occurrence;
    // }
    // public static equalsBidoModelDTO(obj1: BidoModelDTO, obj2: BidoModelDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.modelCode === obj2.modelCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.variantCode === obj2.variantCode;
    // }
    // public static equalsBidoNotificationAttributeDTO(obj1: BidoNotificationAttributeDTO, obj2: BidoNotificationAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.notificationCode === obj2.notificationCode
    //         && obj1.attributeId === obj2.attributeId;
    // }
    // public static equalsBidoNotificationContactDTO(obj1: BidoNotificationContactDTO, obj2: BidoNotificationContactDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.notificationCode === obj2.notificationCode
    //         && obj1.contactName === obj2.contactName;
    // }
    // public static equalsBidoNotificationCounterEquiDTO(
    //     obj1: BidoNotificationCounterEquiDTO,
    //     obj2: BidoNotificationCounterEquiDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.notificationCode === obj2.notificationCode
    //         && obj1.counterCode === obj2.counterCode
    //         && obj1.equipmentCode === obj2.equipmentCode
    //         && obj1.ratingCode === obj2.ratingCode
    //         && obj1.familyCode === obj2.familyCode;
    // }
    // public static equalsBidoNotificationDamageDTO(obj1: BidoNotificationDamageDTO, obj2: BidoNotificationDamageDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.damageCode === obj2.damageCode
    //         && obj1.notificationCode === obj2.notificationCode;
    // }
    DTOUtils.equalsBidoNotificationDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.notificationCode === obj2.notificationCode;
    };
    // public static equalsBidoNotificationEvolutionDTO(obj1: BidoNotificationEvolutionDTO, obj2: BidoNotificationEvolutionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.notificationCode === obj2.notificationCode
    //         && obj1.evolutionNumber === obj2.evolutionNumber
    //         && obj1.evolutionType === obj2.evolutionType
    //         && obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber;
    // }
    // public static equalsBidoNotificationTypeDTO(obj1: BidoNotificationTypeDTO, obj2: BidoNotificationTypeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.typeCode === obj2.typeCode;
    // }
    DTOUtils.equalsBidoOperationDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.operationCode === obj2.operationCode &&
            obj1.operationName === obj2.operationName &&
            obj1.operationDescription === obj2.operationDescription);
    };
    // public static equalsBidoParameterDTO(obj1: BidoParameterDTO, obj2: BidoParameterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.extensionCode === obj2.extensionCode
    //         && obj1.parameterCode === obj2.parameterCode;
    // }
    // public static equalsBidoPnDTO(obj1: BidoPnDTO, obj2: BidoPnDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.pnCode === obj2.pnCode;
    // }
    // public static equalsBidoPreferenceUserDTO(obj1: BidoPreferenceUserDTO, obj2: BidoPreferenceUserDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.preferenceUserId === obj2.preferenceUserId;
    // }
    // public static equalsBidoProfileDTO(obj1: BidoProfileDTO, obj2: BidoProfileDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.profileId === obj2.profileId;
    // }
    // public static equalsBidoProfileFunctionDTO(obj1: BidoProfileFunctionDTO, obj2: BidoProfileFunctionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.profileId === obj2.profileId
    //         && obj1.functionCode === obj2.functionCode
    //         && obj1.userId === obj2.userId;
    // }
    // public static equalsBidoPropertiesDTO(obj1: BidoPropertiesDTO, obj2: BidoPropertiesDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.propertiesId === obj2.propertiesId;
    // }
    // public static equalsBidoPuProfileDTO(obj1: BidoPuProfileDTO, obj2: BidoPuProfileDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.profileId === obj2.profileId
    //         && obj1.preferenceUserId === obj2.preferenceUserId;
    // }
    // public static equalsBidoRatingDTO(obj1: BidoRatingDTO, obj2: BidoRatingDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.familyCode === obj2.familyCode
    //         && obj1.ratingCode === obj2.ratingCode;
    // }
    // public static equalsBidoReportDTO(obj1: BidoReportDTO, obj2: BidoReportDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.reportId === obj2.reportId;
    // }
    // public static equalsBidoReturnReasonDTO(obj1: BidoReturnReasonDTO, obj2: BidoReturnReasonDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.returnReasonCode === obj2.returnReasonCode;
    // }
    // public static equalsBidoRootCauseDTO(obj1: BidoRootCauseDTO, obj2: BidoRootCauseDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.rootCauseId === obj2.rootCauseId;
    // }
    // public static equalsBidoSubscriptionDTO(obj1: BidoSubscriptionDTO, obj2: BidoSubscriptionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.subscriptionId === obj2.subscriptionId;
    // }
    // public static equalsBidoTaskDTO(obj1: BidoTaskDTO, obj2: BidoTaskDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.taskCode === obj2.taskCode
    //         && obj1.taskVersion === obj2.taskVersion;
    // }
    // public static equalsBidoUnitMeasureDTO(obj1: BidoUnitMeasureDTO, obj2: BidoUnitMeasureDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.unitCode === obj2.unitCode;
    // }
    // public static equalsBidoUserDTO(obj1: BidoUserDTO, obj2: BidoUserDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.userId === obj2.userId;
    // }
    // public static equalsBireActionTypeDTO(obj1: BireActionTypeDTO, obj2: BireActionTypeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.actionTypeCode === obj2.actionTypeCode;
    // }
    // public static equalsBireAlternativePnDTO(obj1: BireAlternativePnDTO, obj2: BireAlternativePnDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.versionNumber === obj2.versionNumber
    //         && obj1.pnPnCode === obj2.pnPnCode
    //         && obj1.pnCode === obj2.pnCode
    //         && obj1.section === obj2.section
    //         && obj1.marks === obj2.marks
    //         && obj1.subject === obj2.subject
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.chapter === obj2.chapter
    //         && obj1.sheet === obj2.sheet
    //         && obj1.structureType === obj2.structureType;
    // }
    // public static equalsBireApplicabilityDTO(obj1: BireApplicabilityDTO, obj2: BireApplicabilityDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.applicabilityCode === obj2.applicabilityCode;
    // }
    DTOUtils.equalsBireAttributeDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.attributeId === obj2.attributeId;
    };
    // public static equalsBireClassDTO(obj1: BireClassDTO, obj2: BireClassDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.sapClassCode === obj2.sapClassCode;
    // }
    DTOUtils.equalsBireConcernedAssetDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.assetId === obj2.assetId;
    };
    // public static equalsBireConfigurationDTO(obj1: BireConfigurationDTO, obj2: BireConfigurationDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.configurationCode === obj2.configurationCode;
    // }
    // public static equalsBireConfigurationPackDTO(obj1: BireConfigurationPackDTO, obj2: BireConfigurationPackDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.marks === obj2.marks
    //         && obj1.configurationCode === obj2.configurationCode
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.section === obj2.section
    //         && obj1.packBaseOptionCode === obj2.packBaseOptionCode
    //         && obj1.sheet === obj2.sheet
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.chapter === obj2.chapter
    //         && obj1.structureType === obj2.structureType;
    // }
    // public static equalsBireDamageDTO(obj1: BireDamageDTO, obj2: BireDamageDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.damageCode === obj2.damageCode;
    // }
    // public static equalsBireDamageItemDTO(obj1: BireDamageItemDTO, obj2: BireDamageItemDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.marks === obj2.marks
    //         && obj1.versionNumber === obj2.versionNumber
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.damageCode === obj2.damageCode
    //         && obj1.sheet === obj2.sheet
    //         && obj1.subject === obj2.subject
    //         && obj1.chapter === obj2.chapter
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.section === obj2.section;
    // }
    // public static equalsBireDamLocTaskDTO(obj1: BireDamLocTaskDTO, obj2: BireDamLocTaskDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.taskCode === obj2.taskCode
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.localisationCode === obj2.localisationCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.subject === obj2.subject
    //         && obj1.chapter === obj2.chapter
    //         && obj1.taskVersion === obj2.taskVersion
    //         && obj1.marks === obj2.marks
    //         && obj1.damageCode === obj2.damageCode
    //         && obj1.versionNumber === obj2.versionNumber
    //         && obj1.sheet === obj2.sheet
    //         && obj1.section === obj2.section;
    // }
    // public static equalsBireDocItemDTO(obj1: BireDocItemDTO, obj2: BireDocItemDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.subject === obj2.subject
    //         && obj1.structureType === obj2.structureType
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.sheet === obj2.sheet
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.docCode === obj2.docCode
    //         && obj1.marks === obj2.marks
    //         && obj1.section === obj2.section
    //         && obj1.chapter === obj2.chapter;
    // }
    DTOUtils.equalsBireDocOperationDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.rangeCode === obj2.rangeCode &&
            obj1.opeVersion === obj2.opeVersion &&
            obj1.opeCode === obj2.opeCode &&
            obj1.docCode === obj2.docCode);
    };
    DTOUtils.equalsBireDocSbDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.sbNumber === obj2.sbNumber &&
            obj1.sbRevisionNumber === obj2.sbRevisionNumber &&
            obj1.docCode === obj2.docCode);
    };
    // public static equalsBireDocTaskDTO(obj1: BireDocTaskDTO, obj2: BireDocTaskDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.taskVersion === obj2.taskVersion
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.docCode === obj2.docCode;
    // }
    DTOUtils.equalsBireDocumentDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.docCode === obj2.docCode;
    };
    DTOUtils.equalsBireEvolutionAttributeDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.attributeId === obj2.attributeId &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.evolutionNumber === obj2.evolutionNumber);
    };
    DTOUtils.equalsBireEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber && obj1.evolutionNumber === obj2.evolutionNumber);
    };
    DTOUtils.equalsBireEvolutionEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.interdependenceCode === obj2.interdependenceCode &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.evoEvolutionNumber === obj2.evoEvolutionNumber &&
            obj1.evoEvolutionRevisionNumber === obj2.evoEvolutionRevisionNumber &&
            obj1.variantCode === obj2.variantCode &&
            obj1.familyCode === obj2.familyCode &&
            obj1.structureType === obj2.structureType);
    };
    DTOUtils.equalsBireEvolutionItemDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.familyCode === obj2.familyCode &&
            obj1.variantCode === obj2.variantCode &&
            obj1.sheet === obj2.sheet &&
            obj1.marks === obj2.marks &&
            obj1.chapter === obj2.chapter &&
            obj1.subject === obj2.subject &&
            obj1.section === obj2.section &&
            obj1.structureType === obj2.structureType &&
            obj1.actionTypeCode === obj2.actionTypeCode &&
            obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber);
    };
    DTOUtils.equalsBireEvolutionPnDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.pnCode === obj2.pnCode &&
            obj1.actionTypeCode === obj2.actionTypeCode &&
            obj1.marks === obj2.marks &&
            obj1.chapter === obj2.chapter &&
            obj1.familyCode === obj2.familyCode &&
            obj1.subject === obj2.subject &&
            obj1.sheet === obj2.sheet &&
            obj1.section === obj2.section &&
            obj1.variantCode === obj2.variantCode &&
            obj1.structureType === obj2.structureType);
    };
    DTOUtils.equalsBireEvolutionSbDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.sbNumber === obj2.sbNumber &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.sbRevisionNumber === obj2.sbRevisionNumber);
    };
    DTOUtils.equalsBireEvolutionVariantDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.familyCode === obj2.familyCode &&
            obj1.variantCode === obj2.variantCode &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.structureType === obj2.structureType);
    };
    DTOUtils.equalsBireFamilyDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.familyCode === obj2.familyCode && obj1.structureType === obj2.structureType;
    };
    // public static equalsBireInterdependenceDTO(obj1: BireInterdependenceDTO, obj2: BireInterdependenceDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.interdependenceCode === obj2.interdependenceCode;
    // }
    // public static equalsBireIsnDTO(obj1: BireIsnDTO, obj2: BireIsnDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.isnAta === obj2.isnAta;
    // }
    // public static equalsBireItemAttributeDTO(obj1: BireItemAttributeDTO, obj2: BireItemAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.chapter === obj2.chapter
    //         && obj1.sheet === obj2.sheet
    //         && obj1.marks === obj2.marks
    //         && obj1.section === obj2.section
    //         && obj1.subject === obj2.subject;
    // }
    DTOUtils.equalsBireItemDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.familyCode === obj2.familyCode &&
            obj1.chapter === obj2.chapter &&
            obj1.subject === obj2.subject &&
            obj1.variantCode === obj2.variantCode &&
            obj1.section === obj2.section &&
            obj1.sheet === obj2.sheet &&
            obj1.marks === obj2.marks &&
            obj1.structureType === obj2.structureType);
    };
    DTOUtils.equalsBireItemItemDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.fatherMarks === obj2.fatherMarks &&
            obj1.fatherChapter === obj2.fatherChapter &&
            obj1.fatherSheet === obj2.fatherSheet &&
            obj1.fatherSubject === obj2.fatherSubject &&
            obj1.fatherSection === obj2.fatherSection &&
            obj1.fatherVariantCode === obj2.fatherVariantCode &&
            obj1.fatherFamilyCode === obj2.fatherFamilyCode &&
            obj1.fatherStructureType === obj2.fatherStructureType &&
            obj1.sonMarks === obj2.sonMarks &&
            obj1.sonSection === obj2.sonSection &&
            obj1.sonStructureType === obj2.sonStructureType &&
            obj1.sonSheet === obj2.sonSheet &&
            obj1.sonSubject === obj2.sonSubject &&
            obj1.sonFamilyCode === obj2.sonFamilyCode &&
            obj1.sonVariantCode === obj2.sonVariantCode &&
            obj1.sonChapter === obj2.sonChapter);
    };
    // public static equalsBireItemMaintenanceDTO(obj1: BireItemMaintenanceDTO, obj2: BireItemMaintenanceDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.familyCode === obj2.familyCode
    //         && obj1.chapter === obj2.chapter
    //         && obj1.subject === obj2.subject
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.section === obj2.section
    //         && obj1.sheet === obj2.sheet
    //         && obj1.marks === obj2.marks
    //         && obj1.structureType === obj2.structureType
    //         && obj1.repairCenterCode === obj2.repairCenterCode
    //         && obj1.kPourcentCode === obj2.kPourcentCode
    //         && obj1.environmentCode === obj2.environmentCode;
    // }
    DTOUtils.equalsBireItemPnEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.pnPnCode === obj2.pnPnCode &&
            obj1.familyCode === obj2.familyCode &&
            obj1.variantCode === obj2.variantCode &&
            obj1.pnCode === obj2.pnCode &&
            obj1.chapter === obj2.chapter &&
            obj1.section === obj2.section &&
            obj1.sheet === obj2.sheet &&
            obj1.marks === obj2.marks &&
            obj1.subject === obj2.subject &&
            obj1.structureType === obj2.structureType &&
            obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.actionTypeCode === obj2.actionTypeCode);
    };
    // public static equalsBireItemSiteDTO(obj1: BireItemSiteDTO, obj2: BireItemSiteDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.sheet === obj2.sheet
    //         && obj1.structureType === obj2.structureType
    //         && obj1.repairCenterCode === obj2.repairCenterCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.chapter === obj2.chapter
    //         && obj1.marks === obj2.marks
    //         && obj1.section === obj2.section;
    // }
    // public static equalsBireItemVersionDTO(obj1: BireItemVersionDTO, obj2: BireItemVersionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.versionNumber === obj2.versionNumber
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.subject === obj2.subject
    //         && obj1.section === obj2.section
    //         && obj1.sheet === obj2.sheet
    //         && obj1.marks === obj2.marks
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.chapter === obj2.chapter
    //         && obj1.structureType === obj2.structureType;
    // }
    // public static equalsBireKPourcentDTO(obj1: BireKPourcentDTO, obj2: BireKPourcentDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.kPourcentCode === obj2.kPourcentCode;
    // }
    // public static equalsBireLocalisationCodeDTO(obj1: BireLocalisationCodeDTO, obj2: BireLocalisationCodeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.localisationCode === obj2.localisationCode;
    // }
    // public static equalsBireLocalisationItemDTO(obj1: BireLocalisationItemDTO, obj2: BireLocalisationItemDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.marks === obj2.marks
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.chapter === obj2.chapter
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.localisationCode === obj2.localisationCode
    //         && obj1.versionNumber === obj2.versionNumber
    //         && obj1.sheet === obj2.sheet
    //         && obj1.structureType === obj2.structureType
    //         && obj1.section === obj2.section;
    // }
    // public static equalsBireMaintenanceEnvironmentDTO(
    //     obj1: BireMaintenanceEnvironmentDTO,
    //     obj2: BireMaintenanceEnvironmentDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.environmentCode === obj2.environmentCode;
    // }
    DTOUtils.equalsBireMaintenancePlanDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.planCode === obj2.planCode;
    };
    DTOUtils.equalsBireMeasureReferenceDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.counterCode === obj2.counterCode;
    };
    DTOUtils.equalsBireModelDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.birFamilyCode === obj2.birFamilyCode &&
            obj1.birStructureType === obj2.birStructureType &&
            obj1.variantCode === obj2.variantCode &&
            obj1.modelCode === obj2.modelCode);
    };
    // public static equalsBireModificationAttributeDTO(obj1: BireModificationAttributeDTO, obj2: BireModificationAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId
    //         && obj1.modificationType === obj2.modificationType
    //         && obj1.modificationNumber === obj2.modificationNumber
    //         && obj1.modificationRevisionNumber === obj2.modificationRevisionNumber
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType;
    // }
    DTOUtils.equalsBireModificationDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.modificationType === obj2.modificationType &&
            obj1.modificationNumber === obj2.modificationNumber &&
            obj1.modificationRevisionNumber === obj2.modificationRevisionNumber &&
            obj1.familyCode === obj2.familyCode &&
            obj1.structureType === obj2.structureType);
    };
    DTOUtils.equalsBireModificationEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.modificationRevisionNumber === obj2.modificationRevisionNumber &&
            obj1.modificationNumber === obj2.modificationNumber &&
            obj1.modificationType === obj2.modificationType &&
            obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.structureType === obj2.structureType &&
            obj1.familyCode === obj2.familyCode);
    };
    // public static equalsBireModificationVariantDTO(obj1: BireModificationVariantDTO, obj2: BireModificationVariantDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.variantCode === obj2.variantCode
    //         && obj1.modificationType === obj2.modificationType
    //         && obj1.modificationNumber === obj2.modificationNumber
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.modificationRevisionNumber === obj2.modificationRevisionNumber
    //         && obj1.applicabilityCode === obj2.applicabilityCode
    //         && obj1.varStructureType === obj2.varStructureType
    //         && obj1.varFamilyCode === obj2.varFamilyCode;
    // }
    DTOUtils.equalsBireOperationAttributeDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.opeVersion === obj2.opeVersion &&
            obj1.rangeCode === obj2.rangeCode &&
            obj1.opeCode === obj2.opeCode &&
            obj1.attributeId === obj2.attributeId);
    };
    DTOUtils.equalsBireOperationDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.rangeCode === obj2.rangeCode && obj1.opeCode === obj2.opeCode && obj1.opeVersion === obj2.opeVersion;
    };
    DTOUtils.equalsBireOperationPnDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.opeCode === obj2.opeCode &&
            obj1.rangeCode === obj2.rangeCode &&
            obj1.opeVersion === obj2.opeVersion &&
            obj1.pnCode === obj2.pnCode);
    };
    // public static equalsBirePackBaseOptionDTO(obj1: BirePackBaseOptionDTO, obj2: BirePackBaseOptionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.packBaseOptionCode === obj2.packBaseOptionCode
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.section === obj2.section
    //         && obj1.sheet === obj2.sheet
    //         && obj1.marks === obj2.marks
    //         && obj1.chapter === obj2.chapter
    //         && obj1.structureType === obj2.structureType;
    // }
    // public static equalsBirePackEvolutionDTO(obj1: BirePackEvolutionDTO, obj2: BirePackEvolutionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.variantCode === obj2.variantCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.packBaseOptionCode === obj2.packBaseOptionCode
    //         && obj1.sheet === obj2.sheet
    //         && obj1.subject === obj2.subject
    //         && obj1.section === obj2.section
    //         && obj1.marks === obj2.marks
    //         && obj1.chapter === obj2.chapter
    //         && obj1.structureType === obj2.structureType
    //         && obj1.evolutionNumber === obj2.evolutionNumber
    //         && obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber;
    // }
    DTOUtils.equalsBirePartnerDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.familyCode === obj2.familyCode &&
            obj1.structureType === obj2.structureType &&
            obj1.variantCode === obj2.variantCode &&
            obj1.partnerCode === obj2.partnerCode &&
            obj1.itemRangeMin === obj2.itemRangeMin);
    };
    // public static equalsBirePlanAttributeDTO(obj1: BirePlanAttributeDTO, obj2: BirePlanAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId
    //         && obj1.planCode === obj2.planCode;
    // }
    // public static equalsBirePlanItemDTO(obj1: BirePlanItemDTO, obj2: BirePlanItemDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.sheet === obj2.sheet
    //         && obj1.subject === obj2.subject
    //         && obj1.chapter === obj2.chapter
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.section === obj2.section
    //         && obj1.marks === obj2.marks
    //         && obj1.structureType === obj2.structureType
    //         && obj1.planCode === obj2.planCode;
    // }
    // public static equalsBirePlanPnDTO(obj1: BirePlanPnDTO, obj2: BirePlanPnDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.pnCode === obj2.pnCode
    //         && obj1.planCode === obj2.planCode;
    // }
    // public static equalsBirePlanTaskCounterDTO(obj1: BirePlanTaskCounterDTO, obj2: BirePlanTaskCounterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.planCode === obj2.planCode
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.taskVersion === obj2.taskVersion
    //         && obj1.counterCode === obj2.counterCode;
    // }
    // public static equalsBirePnAttributeDTO(obj1: BirePnAttributeDTO, obj2: BirePnAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.pnCode === obj2.pnCode
    //         && obj1.attributeId === obj2.attributeId;
    // }
    DTOUtils.equalsBirePnDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.pnCode === obj2.pnCode;
    };
    // public static equalsBirePnMeasureDTO(obj1: BirePnMeasureDTO, obj2: BirePnMeasureDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.pnCode === obj2.pnCode
    //         && obj1.counterCode === obj2.counterCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.ratingCode === obj2.ratingCode;
    // }
    DTOUtils.equalsBireQualificationDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.qualificationCode === obj2.qualificationCode;
    };
    // public static equalsBireQualifTaskDTO(obj1: BireQualifTaskDTO, obj2: BireQualifTaskDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.qualificationCode === obj2.qualificationCode
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.taskVersion === obj2.taskVersion;
    // }
    // public static equalsBireQualifVariantDTO(obj1: BireQualifVariantDTO, obj2: BireQualifVariantDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.variantCode === obj2.variantCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.qualificationCode === obj2.qualificationCode;
    // }
    // public static equalsBireRangeDTO(obj1: BireRangeDTO, obj2: BireRangeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.rangeCode === obj2.rangeCode;
    // }
    // public static equalsBireRatingDTO(obj1: BireRatingDTO, obj2: BireRatingDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.ratingCode === obj2.ratingCode;
    // }
    // public static equalsBireRatingVariantDTO(obj1: BireRatingVariantDTO, obj2: BireRatingVariantDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.birFamilyCode === obj2.birFamilyCode
    //         && obj1.birStructureType === obj2.birStructureType
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.ratingCode === obj2.ratingCode;
    // }
    // public static equalsBireReportDTO(obj1: BireReportDTO, obj2: BireReportDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.reportId === obj2.reportId;
    // }
    // public static equalsBireReturnItemDTO(obj1: BireReturnItemDTO, obj2: BireReturnItemDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.chapter === obj2.chapter
    //         && obj1.section === obj2.section
    //         && obj1.sheet === obj2.sheet
    //         && obj1.structureType === obj2.structureType
    //         && obj1.marks === obj2.marks
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.returnReasonCode === obj2.returnReasonCode;
    // }
    // public static equalsBireReturnReasonDTO(obj1: BireReturnReasonDTO, obj2: BireReturnReasonDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.returnReasonCode === obj2.returnReasonCode;
    // }
    // public static equalsBireSbAttributeDTO(obj1: BireSbAttributeDTO, obj2: BireSbAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId
    //         && obj1.sbNumber === obj2.sbNumber
    //         && obj1.sbRevisionNumber === obj2.sbRevisionNumber;
    // }
    DTOUtils.equalsBireSbDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.sbNumber === obj2.sbNumber && obj1.sbRevisionNumber === obj2.sbRevisionNumber;
    };
    DTOUtils.equalsBireSbVariantDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.variantCode === obj2.variantCode &&
            obj1.familyCode === obj2.familyCode &&
            obj1.sbNumber === obj2.sbNumber &&
            obj1.sbRevisionNumber === obj2.sbRevisionNumber &&
            obj1.structureType === obj2.structureType);
    };
    // public static equalsBireShopManualDTO(obj1: BireShopManualDTO, obj2: BireShopManualDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.smCode === obj2.smCode;
    // }
    // public static equalsBireSiteDTO(obj1: BireSiteDTO, obj2: BireSiteDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.repairCenterCode === obj2.repairCenterCode;
    // }
    // public static equalsBireSmTaskDTO(obj1: BireSmTaskDTO, obj2: BireSmTaskDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.taskVersion === obj2.taskVersion
    //         && obj1.smCode === obj2.smCode
    //         && obj1.taskCode === obj2.taskCode;
    // }
    // public static equalsBireTaskAttributeDTO(obj1: BireTaskAttributeDTO, obj2: BireTaskAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.taskVersion === obj2.taskVersion;
    // }
    DTOUtils.equalsBireTaskDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.taskCode === obj2.taskCode && obj1.taskVersion === obj2.taskVersion;
    };
    DTOUtils.equalsBireTaskEvolutionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber &&
            obj1.taskCode === obj2.taskCode &&
            obj1.evolutionNumber === obj2.evolutionNumber &&
            obj1.taskVersion === obj2.taskVersion);
    };
    // public static equalsBireTaskGroupDTO(obj1: BireTaskGroupDTO, obj2: BireTaskGroupDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.groupCode === obj2.groupCode;
    // }
    DTOUtils.equalsBireTaskItemDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.taskCode === obj2.taskCode &&
            obj1.subject === obj2.subject &&
            obj1.versionNumber === obj2.versionNumber &&
            obj1.chapter === obj2.chapter &&
            obj1.structureType === obj2.structureType &&
            obj1.variantCode === obj2.variantCode &&
            obj1.familyCode === obj2.familyCode &&
            obj1.marks === obj2.marks &&
            obj1.taskVersion === obj2.taskVersion &&
            obj1.sheet === obj2.sheet &&
            obj1.section === obj2.section &&
            obj1.taskItemTypeCode === obj2.taskItemTypeCode);
    };
    // public static equalsBireTaskOperationDTO(obj1: BireTaskOperationDTO, obj2: BireTaskOperationDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.rangeCode === obj2.rangeCode
    //         && obj1.opeCode === obj2.opeCode
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.taskVersion === obj2.taskVersion
    //         && obj1.opeVersion === obj2.opeVersion;
    // }
    // public static equalsBireTaskTaskDTO(obj1: BireTaskTaskDTO, obj2: BireTaskTaskDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.birTaskCode === obj2.birTaskCode
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.birTaskVersion === obj2.birTaskVersion
    //         && obj1.taskVersion === obj2.taskVersion;
    // }
    DTOUtils.equalsBireTilDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.technicalLevel === obj2.technicalLevel;
    };
    // public static equalsBireTilItemDTO(obj1: BireTilItemDTO, obj2: BireTilItemDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.sheet === obj2.sheet
    //         && obj1.subject === obj2.subject
    //         && obj1.section === obj2.section
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.marks === obj2.marks
    //         && obj1.structureType === obj2.structureType
    //         && obj1.technicalLevel === obj2.technicalLevel
    //         && obj1.chapter === obj2.chapter;
    // }
    // public static equalsBireTilSiteDTO(obj1: BireTilSiteDTO, obj2: BireTilSiteDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.repairCenterCode === obj2.repairCenterCode
    //         && obj1.technicalLevel === obj2.technicalLevel;
    // }
    DTOUtils.equalsBireTilTaskDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.taskVersion === obj2.taskVersion &&
            obj1.taskCode === obj2.taskCode &&
            obj1.technicalLevel === obj2.technicalLevel);
    };
    // public static equalsBireTrendItemDTO(obj1: BireTrendItemDTO, obj2: BireTrendItemDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.marks === obj2.marks
    //         && obj1.subject === obj2.subject
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.modelCode === obj2.modelCode
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.chapter === obj2.chapter
    //         && obj1.structureType === obj2.structureType
    //         && obj1.section === obj2.section
    //         && obj1.sheet === obj2.sheet;
    // }
    // public static equalsBireTrendModelDTO(obj1: BireTrendModelDTO, obj2: BireTrendModelDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.modelCode === obj2.modelCode;
    // }
    // public static equalsBireTrendTaskCounterDTO(obj1: BireTrendTaskCounterDTO, obj2: BireTrendTaskCounterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.taskVersion === obj2.taskVersion
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.modelCode === obj2.modelCode
    //         && obj1.counterCode === obj2.counterCode;
    // }
    // public static equalsBireUnitMeasureDTO(obj1: BireUnitMeasureDTO, obj2: BireUnitMeasureDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.unitCode === obj2.unitCode;
    // }
    DTOUtils.equalsBireUnmountAssemblyDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.structureType === obj2.structureType &&
            obj1.unmountCode === obj2.unmountCode &&
            obj1.variantCode === obj2.variantCode &&
            obj1.familyCode === obj2.familyCode);
    };
    DTOUtils.equalsBireUnmountOrderDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.variantCode === obj2.variantCode &&
            obj1.structureType === obj2.structureType &&
            obj1.unmountCode === obj2.unmountCode &&
            obj1.familyCode === obj2.familyCode &&
            obj1.unmUnmountCode === obj2.unmUnmountCode &&
            obj1.unmVariantCode === obj2.unmVariantCode &&
            obj1.unmFamilyCode === obj2.unmFamilyCode &&
            obj1.unmStructureType === obj2.unmStructureType);
    };
    // public static equalsBireVariantAttributeDTO(obj1: BireVariantAttributeDTO, obj2: BireVariantAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.familyCode === obj2.familyCode
    //         && obj1.structureType === obj2.structureType
    //         && obj1.attributeId === obj2.attributeId
    //         && obj1.variantCode === obj2.variantCode;
    // }
    DTOUtils.equalsBireVariantVersionDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.familyCode === obj2.familyCode &&
            obj1.variantCode === obj2.variantCode &&
            obj1.structureType === obj2.structureType);
    };
    // public static equalsBireVersionMeasureDTO(obj1: BireVersionMeasureDTO, obj2: BireVersionMeasureDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.chapter === obj2.chapter
    //         && obj1.counterCode === obj2.counterCode
    //         && obj1.marks === obj2.marks
    //         && obj1.section === obj2.section
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.sheet === obj2.sheet
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.structureType === obj2.structureType
    //         && obj1.versionNumber === obj2.versionNumber
    //         && obj1.birFamilyCode === obj2.birFamilyCode
    //         && obj1.birStructureType === obj2.birStructureType
    //         && obj1.ratingCode === obj2.ratingCode;
    // }
    // public static equalsBireVersionPnDTO(obj1: BireVersionPnDTO, obj2: BireVersionPnDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.pnCode === obj2.pnCode
    //         && obj1.versionNumber === obj2.versionNumber
    //         && obj1.section === obj2.section
    //         && obj1.marks === obj2.marks
    //         && obj1.chapter === obj2.chapter
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.sheet === obj2.sheet
    //         && obj1.structureType === obj2.structureType
    //         && obj1.isnAta === obj2.isnAta;
    // }
    // public static equalsBireVpAttributeDTO(obj1: BireVpAttributeDTO, obj2: BireVpAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId
    //         && obj1.pnCode === obj2.pnCode
    //         && obj1.versionNumber === obj2.versionNumber
    //         && obj1.section === obj2.section
    //         && obj1.marks === obj2.marks
    //         && obj1.chapter === obj2.chapter
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.subject === obj2.subject
    //         && obj1.sheet === obj2.sheet
    //         && obj1.structureType === obj2.structureType
    //         && obj1.isnAta === obj2.isnAta;
    // }
    // public static equalsBsdeAttributeDTO(obj1: BsdeAttributeDTO, obj2: BsdeAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId;
    // }
    // public static equalsBsdeAvailabilityDTO(obj1: BsdeAvailabilityDTO, obj2: BsdeAvailabilityDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.availabilityId === obj2.availabilityId;
    // }
    // public static equalsBsdeAwCustomDTO(obj1: BsdeAwCustomDTO, obj2: BsdeAwCustomDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.propertyName === obj2.propertyName;
    // }
    // public static equalsBsdeConfigurationDTO(obj1: BsdeConfigurationDTO, obj2: BsdeConfigurationDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.configurationNumber === obj2.configurationNumber;
    // }
    // public static equalsBsdeCounterDTO(obj1: BsdeCounterDTO, obj2: BsdeCounterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.counterCode === obj2.counterCode;
    // }
    // public static equalsBsdeDecisionAttributeDTO(obj1: BsdeDecisionAttributeDTO, obj2: BsdeDecisionAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.decId === obj2.decId
    //         && obj1.attributeName === obj2.attributeName;
    // }
    // public static equalsBsdeDecisionDTO(obj1: BsdeDecisionDTO, obj2: BsdeDecisionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.decId === obj2.decId
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeDocumentDTO(obj1: BsdeDocumentDTO, obj2: BsdeDocumentDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.documentId === obj2.documentId;
    // }
    // public static equalsBsdeEventDTO(obj1: BsdeEventDTO, obj2: BsdeEventDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.eventId === obj2.eventId;
    // }
    // public static equalsBsdeEventEventDTO(obj1: BsdeEventEventDTO, obj2: BsdeEventEventDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.bsdEventId === obj2.bsdEventId
    //         && obj1.projectId === obj2.projectId
    //         && obj1.bsdProjectId === obj2.bsdProjectId
    //         && obj1.eventLinkCode === obj2.eventLinkCode
    //         && obj1.eventId === obj2.eventId;
    // }
    // public static equalsBsdeEvolutionDTO(obj1: BsdeEvolutionDTO, obj2: BsdeEvolutionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.evolutionNumber === obj2.evolutionNumber
    //         && obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber;
    // }
    // public static equalsBsdeFindingDTO(obj1: BsdeFindingDTO, obj2: BsdeFindingDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.findingId === obj2.findingId
    //         && obj1.invId === obj2.invId
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeInventoryAttributeDTO(obj1: BsdeInventoryAttributeDTO, obj2: BsdeInventoryAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.invId === obj2.invId
    //         && obj1.attributeName === obj2.attributeName;
    // }
    // public static equalsBsdeInventoryCounterDTO(obj1: BsdeInventoryCounterDTO, obj2: BsdeInventoryCounterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.invId === obj2.invId
    //         && obj1.counterCode === obj2.counterCode
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeInventoryDTO(obj1: BsdeInventoryDTO, obj2: BsdeInventoryDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.invId === obj2.invId
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeMaintenancePlanDTO(obj1: BsdeMaintenancePlanDTO, obj2: BsdeMaintenancePlanDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.planCode === obj2.planCode
    //         && obj1.pn === obj2.pn
    //         && obj1.sn === obj2.sn;
    // }
    // public static equalsBsdeMcEvolutionDTO(obj1: BsdeMcEvolutionDTO, obj2: BsdeMcEvolutionDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.evolutionNumber === obj2.evolutionNumber
    //         && obj1.evolutionRevisionNumber === obj2.evolutionRevisionNumber;
    // }
    // public static equalsBsdeOperationDTO(obj1: BsdeOperationDTO, obj2: BsdeOperationDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.opeId === obj2.opeId
    //         && obj1.workOrderId === obj2.workOrderId
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdePnDTO(obj1: BsdePnDTO, obj2: BsdePnDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.pnCode === obj2.pnCode;
    // }
    // public static equalsBsdeProjectAttributeDTO(obj1: BsdeProjectAttributeDTO, obj2: BsdeProjectAttributeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.attributeId === obj2.attributeId
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeProjectCounterDTO(obj1: BsdeProjectCounterDTO, obj2: BsdeProjectCounterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.counterCode === obj2.counterCode;
    // }
    // public static equalsBsdeProjectDTO(obj1: BsdeProjectDTO, obj2: BsdeProjectDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeProjectTaskCounterDTO(obj1: BsdeProjectTaskCounterDTO, obj2: BsdeProjectTaskCounterDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.counterCode === obj2.counterCode
    //         && obj1.taskCode === obj2.taskCode
    //         && obj1.taskVersion === obj2.taskVersion
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeReportDTO(obj1: BsdeReportDTO, obj2: BsdeReportDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.reportId === obj2.reportId;
    // }
    // public static equalsBsdeReturnProjectDTO(obj1: BsdeReturnProjectDTO, obj2: BsdeReturnProjectDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.returnReasonCode === obj2.returnReasonCode;
    // }
    // public static equalsBsdeReturnReasonDTO(obj1: BsdeReturnReasonDTO, obj2: BsdeReturnReasonDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.returnReasonCode === obj2.returnReasonCode;
    // }
    // public static equalsBsdeScheduledEventDTO(obj1: BsdeScheduledEventDTO, obj2: BsdeScheduledEventDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.eventId === obj2.eventId;
    // }
    // public static equalsBsdeSiteDTO(obj1: BsdeSiteDTO, obj2: BsdeSiteDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.repairCenterCode === obj2.repairCenterCode;
    // }
    DTOUtils.equalsBsdeSitePnTilDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.repairCenterCode === obj2.repairCenterCode &&
            obj1.pnCode === obj2.pnCode &&
            obj1.technicalLevel === obj2.technicalLevel);
    };
    // public static equalsBsdeSparePartDTO(obj1: BsdeSparePartDTO, obj2: BsdeSparePartDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.projectId === obj2.projectId
    //         && obj1.sparePartId === obj2.sparePartId;
    // }
    // public static equalsBsdeStockTypeDTO(obj1: BsdeStockTypeDTO, obj2: BsdeStockTypeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.stockType === obj2.stockType;
    // }
    // public static equalsBsdeStoreDTO(obj1: BsdeStoreDTO, obj2: BsdeStoreDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.storeCode === obj2.storeCode;
    // }
    // public static equalsBsdeStorePnDTO(obj1: BsdeStorePnDTO, obj2: BsdeStorePnDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.storeCode === obj2.storeCode
    //         && obj1.pnCode === obj2.pnCode
    //         && obj1.stockType === obj2.stockType;
    // }
    // public static equalsBsdeTargetDTO(obj1: BsdeTargetDTO, obj2: BsdeTargetDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.targetId === obj2.targetId
    //         && obj1.projectId === obj2.projectId
    //         && obj1.configurationNumber === obj2.configurationNumber;
    // }
    // public static equalsBsdeTaskDTO(obj1: BsdeTaskDTO, obj2: BsdeTaskDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.taskCode === obj2.taskCode
    //         && obj1.taskVersion === obj2.taskVersion;
    // }
    // public static equalsBsdeTilDTO(obj1: BsdeTilDTO, obj2: BsdeTilDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.technicalLevel === obj2.technicalLevel;
    // }
    // public static equalsBsdeTrendModelDTO(obj1: BsdeTrendModelDTO, obj2: BsdeTrendModelDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.modelCode === obj2.modelCode
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeWorkOrderDTO(obj1: BsdeWorkOrderDTO, obj2: BsdeWorkOrderDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.workOrderId === obj2.workOrderId
    //         && obj1.projectId === obj2.projectId;
    // }
    // public static equalsBsdeWorkscopeDTO(obj1: BsdeWorkscopeDTO, obj2: BsdeWorkscopeDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.subject === obj2.subject
    //         && obj1.marks === obj2.marks
    //         && obj1.variantCode === obj2.variantCode
    //         && obj1.chapter === obj2.chapter
    //         && obj1.projectId === obj2.projectId
    //         && obj1.section === obj2.section
    //         && obj1.familyCode === obj2.familyCode
    //         && obj1.sheet === obj2.sheet
    //         && obj1.structureType === obj2.structureType;
    // }
    // public static equalsHBidoEquipmentDTO(obj1: HBidoEquipmentDTO, obj2: HBidoEquipmentDTO): boolean {
    //     if (!obj1 && !obj2) { return true; }
    //     if (!obj1 || !obj2) { return false; }
    //     return obj1.timestamp === obj2.timestamp
    //         && obj1.action === obj2.action
    //         && obj1.equipmentCode === obj2.equipmentCode;
    // }
    DTOUtils.equalsLinkedTaskDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.bireTaskDTO === obj2.bireTaskDTO && obj1.linkType === obj2.linkType;
    };
    DTOUtils.equalsLinkedTasksTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.taskCode === obj2.taskCode &&
            obj1.taskVersion === obj2.taskVersion &&
            obj1.taskDesignation === obj2.taskDesignation &&
            obj1.taskType === obj2.taskType &&
            obj1.taskGroup === obj2.taskGroup);
    };
    DTOUtils.equalsConfigDocumentsTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return (obj1.number === obj2.number &&
            obj1.revisionNumber === obj2.revisionNumber &&
            obj1.type === obj2.type &&
            // obj1.approvalDate === obj2.approvalDate &&
            obj1.applicabilityCode === obj2.applicabilityCode &&
            obj1.variantCode === obj2.variantCode &&
            obj1.structureType === obj2.structureType &&
            obj1.familyCode === obj2.familyCode);
    };
    DTOUtils.equalsQualificationListTableOutputDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        if (!!obj1.bidtQualificationDTO && !!obj2.bidtQualificationDTO) {
            return (obj1.bidtQualificationDTO.qualificationCode === obj2.bidtQualificationDTO.qualificationCode &&
                obj1.bidtQualificationDTO.qualificationDegre === obj2.bidtQualificationDTO.qualificationDegre &&
                obj1.bidtQualificationDTO.qualificationTitle === obj2.bidtQualificationDTO.qualificationTitle &&
                obj1.bidtQualificationDTO.qualificationType === obj2.bidtQualificationDTO.qualificationType &&
                obj1.bidtQualificationDTO.averageHourRate === obj2.bidtQualificationDTO.averageHourRate &&
                obj1.bidtQualificationDTO.standard === obj2.bidtQualificationDTO.standard);
        }
        return false;
    };
    DTOUtils.equalsWarehouseTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.bidtSiteId === obj2.bidtSiteId && obj1.wareHouseId === obj2.wareHouseId;
    };
    DTOUtils.equalsValuationTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.bidtValuationGroupId === obj2.bidtValuationGroupId;
    };
    DTOUtils.equalsSupplierTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.bidoCustomerCustomerCode === obj2.bidoCustomerCustomerCode;
    };
    DTOUtils.equalsAlternativeTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.birePnByFkBidtPnBidtPn2BirePnPnCode === obj2.birePnByFkBidtPnBidtPn2BirePnPnCode;
    };
    DTOUtils.equalsContainerTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.pnCode === obj2.pnCode;
    };
    DTOUtils.equalsSupplyConversionTableDTO = function (obj1, obj2) {
        if (!obj1 && !obj2) {
            return true;
        }
        if (!obj1 || !obj2) {
            return false;
        }
        return obj1.pnCode === obj2.pnCode && obj1.unit === obj2.unit && obj1.alternativeUnit === obj2.alternativeUnit;
    };
    return DTOUtils;
}());



/***/ })

}]);
//# sourceMappingURL=default~administration-administration-module~administration-business-partner-business-partner-module~32aabe18.js.map