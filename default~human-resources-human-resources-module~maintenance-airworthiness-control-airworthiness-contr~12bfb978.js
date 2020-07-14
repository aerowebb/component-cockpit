(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~human-resources-human-resources-module~maintenance-airworthiness-control-airworthiness-contr~12bfb978"],{

/***/ "./src/app/main/human-resources/employee-form/employee-form.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/employee-form.service.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFormService", function() { return EmployeeFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_bidt_absence_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/bidt-absence.api */ "./src/app/shared/api/bidt-absence.api.ts");
/* harmony import */ var _shared_api_bidt_category_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api/bidt-category.api */ "./src/app/shared/api/bidt-category.api.ts");
/* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/api/bidt-company.api */ "./src/app/shared/api/bidt-company.api.ts");
/* harmony import */ var _shared_api_bidt_contract_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/api/bidt-contract.api */ "./src/app/shared/api/bidt-contract.api.ts");
/* harmony import */ var _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/api/bidt-document.api */ "./src/app/shared/api/bidt-document.api.ts");
/* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/api/bidt-employee.api */ "./src/app/shared/api/bidt-employee.api.ts");
/* harmony import */ var _shared_api_bidt_evaluation_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/api/bidt-evaluation.api */ "./src/app/shared/api/bidt-evaluation.api.ts");
/* harmony import */ var _shared_api_bidt_expense_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/api/bidt-expense.api */ "./src/app/shared/api/bidt-expense.api.ts");
/* harmony import */ var _shared_api_bidt_hourly_cost_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/api/bidt-hourly-cost.api */ "./src/app/shared/api/bidt-hourly-cost.api.ts");
/* harmony import */ var _shared_api_bidt_labor_template_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/api/bidt-labor-template.api */ "./src/app/shared/api/bidt-labor-template.api.ts");
/* harmony import */ var _shared_api_bidt_medical_visit_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/api/bidt-medical-visit.api */ "./src/app/shared/api/bidt-medical-visit.api.ts");
/* harmony import */ var _shared_api_bidt_qualif_employee_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/api/bidt-qualif-employee.api */ "./src/app/shared/api/bidt-qualif-employee.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_training_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/api/bidt-training.api */ "./src/app/shared/api/bidt-training.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var EmployeeFormService = /** @class */ (function (_super) {
    __extends(EmployeeFormService, _super);
    function EmployeeFormService(http, appConfigService, bidtCompanyApi, bidtEmployeeApi, bidtSiteApi, bidtContractApi, taskManagementApi, bidtLaborTemplateApi, bidtAbsenceApi, bidtCategoryApi, bidtEvaluationApi, bidtExpenseApi, bidtHourlyCostApi, bidtMedicalVisitApi, bidtQualifEmployeeApi, bidtTrainingApi, bidtDocumentApi, aircraftMaintenanceApi, fleetManagementApi, userProfileManagementApi, bidtWarehouse) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtCompanyApi = bidtCompanyApi;
        _this.bidtEmployeeApi = bidtEmployeeApi;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtContractApi = bidtContractApi;
        _this.taskManagementApi = taskManagementApi;
        _this.bidtLaborTemplateApi = bidtLaborTemplateApi;
        _this.bidtAbsenceApi = bidtAbsenceApi;
        _this.bidtCategoryApi = bidtCategoryApi;
        _this.bidtEvaluationApi = bidtEvaluationApi;
        _this.bidtExpenseApi = bidtExpenseApi;
        _this.bidtHourlyCostApi = bidtHourlyCostApi;
        _this.bidtMedicalVisitApi = bidtMedicalVisitApi;
        _this.bidtQualifEmployeeApi = bidtQualifEmployeeApi;
        _this.bidtTrainingApi = bidtTrainingApi;
        _this.bidtDocumentApi = bidtDocumentApi;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        _this.bidtWarehouse = bidtWarehouse;
        return _this;
    }
    EmployeeFormService.prototype.getEmployeeDetails = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.getEmployeeDetails, employeeId);
    };
    EmployeeFormService.prototype.saveEmployees = function (employee) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.saveEmployees, employee);
    };
    EmployeeFormService.prototype.generateEmployeeCard = function (employee) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.generateEmployeeCard, employee);
    };
    /**************************************************************************
     * Company api
     *************************************************************************/
    EmployeeFormService.prototype.findBidtCompanyByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, criteria);
    };
    /**************************************************************************
     * Site api
     *************************************************************************/
    EmployeeFormService.prototype.findBidtSiteByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAll, criteria);
    };
    /**************************************************************************
     * Contract api
     *************************************************************************/
    EmployeeFormService.prototype.findAllContractNames = function (criteria) {
        return _super.prototype.post.call(this, this.bidtContractApi.findAll, criteria);
    };
    EmployeeFormService.prototype.getLocalCurrency = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.getLocalCurrency);
    };
    /**************************************************************************
     * Work Template api
     *************************************************************************/
    EmployeeFormService.prototype.findAllWorkTemplateNames = function () {
        return _super.prototype.post.call(this, this.bidtLaborTemplateApi.findAll);
    };
    /**************************************************************************
     * Hourly Costs api
     *************************************************************************/
    EmployeeFormService.prototype.findHourlyCostsByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtHourlyCostApi.findByEmployeeId, employeeId);
    };
    /**************************************************************************
     * Qualification api
     *************************************************************************/
    EmployeeFormService.prototype.findQualificationsByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtQualifEmployeeApi.findQualificationsByEmployeeId, employeeId);
    };
    EmployeeFormService.prototype.getEmployeeQualificationText = function (employeeId) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.getEmployeeQualificationText, employeeId);
    };
    /**************************************************************************
     * License api
     *************************************************************************/
    EmployeeFormService.prototype.findByLicenseId = function (license) {
        return _super.prototype.post.call(this, this.bidtCategoryApi.findByLicenseId, license);
    };
    /**************************************************************************
     * Training api
     *************************************************************************/
    EmployeeFormService.prototype.findTrainingByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtTrainingApi.findTrainingsByEmployeeId, employeeId);
    };
    /**************************************************************************
     * Evaluation api
     *************************************************************************/
    EmployeeFormService.prototype.findEvaluationsByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtEvaluationApi.findEvaluationsByEmployeeId, employeeId);
    };
    /**************************************************************************
     * Absence api
     *************************************************************************/
    EmployeeFormService.prototype.findAbsenceByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtAbsenceApi.findAbsenceByEmployeeId, employeeId);
    };
    /**************************************************************************
     * Holiday api
     *************************************************************************/
    EmployeeFormService.prototype.findHolidaysByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtAbsenceApi.findHolidaysByEmployeeId, employeeId);
    };
    /**************************************************************************
     * Expense api
     *************************************************************************/
    EmployeeFormService.prototype.findExpenseByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtExpenseApi.findByEmployeeId, employeeId);
    };
    /**************************************************************************
     * Medical Visit api
     *************************************************************************/
    EmployeeFormService.prototype.findByEmployeeIdMedicalEmployee = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtMedicalVisitApi.findByEmployeeIdMedicalEmployee, employeeId);
    };
    /**************************************************************************
     * Document api
     *************************************************************************/
    EmployeeFormService.prototype.findDocumentByEmployeeId = function (employeeId) {
        return _super.prototype.post.call(this, this.bidtDocumentApi.findByEmployeeId, employeeId);
    };
    EmployeeFormService.prototype.findDocumentCategories = function (propertyId) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findBidoPropertiesValuesByPropertiesId, propertyId);
    };
    /**************************************************************************
     * Works api
     *************************************************************************/
    EmployeeFormService.prototype.getWorksByEmployee = function (input) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.getWorksByEmployee, input);
    };
    /**************************************************************************
     * Flights api
     *************************************************************************/
    EmployeeFormService.prototype.getFlightsByEmployee = function (input) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.getFlightsByEmployee, input);
    };
    /**************************************************************************
     * Fleet management api
     *************************************************************************/
    EmployeeFormService.prototype.findAcrsEventListByUser = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAcrsEventListByUser, input);
    };
    EmployeeFormService.prototype.findBidoEquipment = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
    };
    EmployeeFormService.prototype.getEventStatusValues = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.getEventStatusValues);
    };
    /**************************************************************************
     * Employee works information api
     *************************************************************************/
    EmployeeFormService.prototype.findWorksInformationByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.findWorksInformationByCriteria, criteria);
    };
    /**************************************************************************
     * Warehouse api
     *************************************************************************/
    EmployeeFormService.prototype.findWarehousesBySite = function (input) {
        return _super.prototype.post.call(this, this.bidtWarehouse.findBySiteId, input);
    };
    EmployeeFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_22__["AppConfigService"],
            _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_5__["BidtCompanyApi"],
            _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_8__["BidtEmployeeApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_15__["BidtSiteApi"],
            _shared_api_bidt_contract_api__WEBPACK_IMPORTED_MODULE_6__["BidtContractApi"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_19__["TaskManagementApi"],
            _shared_api_bidt_labor_template_api__WEBPACK_IMPORTED_MODULE_12__["BidtLaborTemplateApi"],
            _shared_api_bidt_absence_api__WEBPACK_IMPORTED_MODULE_3__["BidtAbsenceApi"],
            _shared_api_bidt_category_api__WEBPACK_IMPORTED_MODULE_4__["BidtCategoryApi"],
            _shared_api_bidt_evaluation_api__WEBPACK_IMPORTED_MODULE_9__["BidtEvaluationApi"],
            _shared_api_bidt_expense_api__WEBPACK_IMPORTED_MODULE_10__["BidtExpenseApi"],
            _shared_api_bidt_hourly_cost_api__WEBPACK_IMPORTED_MODULE_11__["BidtHourlyCostApi"],
            _shared_api_bidt_medical_visit_api__WEBPACK_IMPORTED_MODULE_13__["BidtMedicalVisitApi"],
            _shared_api_bidt_qualif_employee_api__WEBPACK_IMPORTED_MODULE_14__["BidtQualifEmployeeApi"],
            _shared_api_bidt_training_api__WEBPACK_IMPORTED_MODULE_16__["BidtTrainingApi"],
            _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_7__["BidtDocumentApi"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__["AircraftMaintenanceApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_18__["FleetManagementApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_20__["UserProfileManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_17__["BidtWarehouseApi"]])
    ], EmployeeFormService);
    return EmployeeFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_21__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~human-resources-human-resources-module~maintenance-airworthiness-control-airworthiness-contr~12bfb978.js.map