(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~engineering-management-dea-dia-dea-dia-module~engineering-management-engineering-management-~42d801af"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/app/modules/purchase-contract/utils/table-data-source-with-history.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/utils/table-data-source-with-history.ts ***!
  \***********************************************************************************/
/*! exports provided: TableDataSourceWithHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataSourceWithHistory", function() { return TableDataSourceWithHistory; });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_utils_service_locator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/service-locator */ "./src/app/shared/utils/service-locator.ts");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var TableDataSourceWithHistory = /** @class */ (function (_super) {
    __extends(TableDataSourceWithHistory, _super);
    function TableDataSourceWithHistory(_a) {
        var columns = _a.columns, allowMultiSelect = _a.allowMultiSelect, allowResizableColumns = _a.allowResizableColumns, data = _a.data, enablePaginator = _a.enablePaginator, enableSelection = _a.enableSelection, itemsPerPage = _a.itemsPerPage, customGlobalFilter = _a.customGlobalFilter, customSort = _a.customSort, allowUniqueValue = _a.allowUniqueValue, propertiesWitchIdentifyData = _a.propertiesWitchIdentifyData, errorOnAddedDuplicate = _a.errorOnAddedDuplicate, errorOnUpdatedDuplicate = _a.errorOnUpdatedDuplicate;
        var _this = _super.call(this, {
            columns: columns,
            allowMultiSelect: allowMultiSelect,
            allowResizableColumns: allowResizableColumns,
            data: data,
            enablePaginator: enablePaginator,
            enableSelection: enableSelection,
            itemsPerPage: itemsPerPage,
            customGlobalFilter: customGlobalFilter,
            customSort: customSort
        }) || this;
        _this.errorOnAddedDuplicateDefaultKey = 'TableDataSourceWithHistoryComponent.errorOnAddedDuplicate';
        _this.errorOnUpdatedDuplicateDefaultKey = 'TableDataSourceWithHistoryComponent.errorOnUpdatedDuplicate';
        _this.allowUniqueValue = typeof allowUniqueValue === 'undefined' ? true : allowUniqueValue;
        _this.propertiesWitchIdentifyData = !!propertiesWitchIdentifyData ? propertiesWitchIdentifyData : [];
        _this.errorOnAddedDuplicate = !!errorOnAddedDuplicate ? errorOnAddedDuplicate : _this.errorOnAddedDuplicateDefaultKey;
        _this.errorOnUpdatedDuplicate = !!errorOnUpdatedDuplicate
            ? errorOnUpdatedDuplicate
            : _this.errorOnUpdatedDuplicateDefaultKey;
        _this._messageService = _shared_utils_service_locator__WEBPACK_IMPORTED_MODULE_4__["ServiceLocator"].injector.get(_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]);
        _this._translateService = _shared_utils_service_locator__WEBPACK_IMPORTED_MODULE_4__["ServiceLocator"].injector.get(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]);
        _this.clearHistory();
        return _this;
    }
    TableDataSourceWithHistory.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].PCT_TABLE_DATA_SOURCE_WITH_HISTORY;
    };
    TableDataSourceWithHistory.prototype.setData = function (newData) {
        _super.prototype.setData.call(this, newData);
        this.clearHistory();
    };
    // DO NOT USE FOR THE INIT LOAD TABLE, prefer setData() instead or the added, deletedList will be corromped
    TableDataSourceWithHistory.prototype.addData = function (dataToAdd) {
        var _this = this;
        var addedData;
        if (this.allowUniqueValue) {
            dataToAdd.forEach(function (entity) {
                if (!_this.existEqualsDatas(entity)) {
                    addedData = _this.addAndReturnData([entity]);
                    addedData.forEach(function (elt) { return _this.addedList.push(elt); });
                }
                else {
                    _this._translateService
                        .get(_this.errorOnAddedDuplicate, { data: entity })
                        .subscribe(function (result) { return _this._messageService.showErrorMessage(result); });
                }
            });
        }
        else {
            addedData = this.addAndReturnData(dataToAdd);
            addedData.forEach(function (elt) { return _this.addedList.push(elt); });
        }
        return addedData;
    };
    TableDataSourceWithHistory.prototype.addAndReturnData = function (dataToAdd) {
        var _this = this;
        _super.prototype.addData.call(this, dataToAdd);
        var returnedDatas = [];
        dataToAdd.forEach(function (entity) {
            var data = _this.getEqualsDatas(entity);
            if (!!data) {
                returnedDatas.push(data);
            }
        });
        return returnedDatas;
    };
    TableDataSourceWithHistory.prototype.getTranslateKey = function (key, componentName) {
        return (componentName || this.getComponentName()) + "." + key;
    };
    TableDataSourceWithHistory.prototype.replaceData = function (dataToRemove, dataToAdd) {
        var _this = this;
        var updateData;
        if (this.allowUniqueValue) {
            if (!this.existEqualsDatas(dataToAdd, dataToRemove._id)) {
                updateData = this.updateData(dataToRemove, dataToAdd);
            }
            else {
                this._translateService
                    .get(this.errorOnUpdatedDuplicate, { data: dataToAdd })
                    .subscribe(function (result) { return _this._messageService.showErrorMessage(result); });
            }
        }
        else {
            updateData = this.updateData(dataToRemove, dataToAdd);
        }
        return updateData;
    };
    TableDataSourceWithHistory.prototype.updateData = function (dataToRemove, dataToAdd) {
        var replacedData = this.replaceAndReturnData(dataToRemove, dataToAdd);
        this.markAsReplaced(dataToRemove, replacedData);
        this.dataSelection = [];
        return replacedData;
    };
    TableDataSourceWithHistory.prototype.markAsReplaced = function (dataToRemove, replacedData) {
        var indexOfAddedElt = this.indexOf(this.addedList, dataToRemove);
        if (indexOfAddedElt !== -1) {
            this.addedList.splice(indexOfAddedElt, 1, replacedData);
        }
        else {
            var indexOfUpdatedElt = this.indexOf(this.updatedList, dataToRemove);
            if (indexOfUpdatedElt !== -1) {
                this.updatedList.splice(indexOfUpdatedElt, 1, replacedData);
            }
            else {
                this.updatedList.push(replacedData);
            }
        }
    };
    TableDataSourceWithHistory.prototype.markAsUpdated = function (data) {
        this.markAsReplaced(data, data);
    };
    TableDataSourceWithHistory.prototype.replaceAndReturnData = function (dataToRemove, dataToAdd) {
        _super.prototype.replaceData.call(this, dataToRemove, dataToAdd);
        return this.getEqualsDatas(dataToAdd);
    };
    TableDataSourceWithHistory.prototype.deleteData = function (dataToDelete) {
        var _this = this;
        dataToDelete.forEach(function (entity) {
            var indexOfAddedElt = _this.indexOf(_this.addedList, entity);
            var indexOfUpdatedElt = _this.indexOf(_this.updatedList, entity);
            if (indexOfAddedElt !== -1) {
                _this.addedList.splice(indexOfAddedElt, 1);
            }
            else if (indexOfUpdatedElt !== -1) {
                _this.updatedList.splice(indexOfUpdatedElt, 1);
                _this.deletedList.push(entity);
            }
            else {
                _this.deletedList.push(entity);
            }
        });
        _super.prototype.deleteData.call(this, dataToDelete);
    };
    TableDataSourceWithHistory.prototype.deleteDataSelection = function () {
        var _this = this;
        this.dataSelection.forEach(function (elt) { return _this.deleteData([elt]); });
        this.dataSelection = [];
    };
    TableDataSourceWithHistory.prototype.indexOf = function (list, entity) {
        var _this = this;
        if (!!list && list.length > 0) {
            return list.findIndex(function (elt) { return _this.equals(entity, elt); });
        }
        else {
            return -1;
        }
    };
    TableDataSourceWithHistory.prototype.getEqualsDatas = function (toFind, idToIgnore) {
        var _this = this;
        var returnedData;
        var equalsData = this.dataSrc.filter(function (elt) { return elt._id !== idToIgnore && _this.equals(toFind, elt); });
        if (!!equalsData && equalsData.length > 0) {
            returnedData = equalsData[0];
        }
        return returnedData;
    };
    TableDataSourceWithHistory.prototype.existEqualsDatas = function (toFind, idToIgnore) {
        return !!this.getEqualsDatas(toFind, idToIgnore);
    };
    TableDataSourceWithHistory.prototype.equals = function (toFind, entity) {
        if (!entity || !toFind) {
            return false;
        }
        var propertiesWitchIdentifyData;
        if (!!this.propertiesWitchIdentifyData && this.propertiesWitchIdentifyData.length > 0) {
            propertiesWitchIdentifyData = this.propertiesWitchIdentifyData;
        }
        else {
            propertiesWitchIdentifyData = Object.keys(toFind).filter(function (keyOfT) { return Object.keys(entity).includes(keyOfT); });
        }
        for (var i = 0; i < propertiesWitchIdentifyData.length; i++) {
            var property = propertiesWitchIdentifyData[i];
            if (toFind[property] !== entity[property]) {
                return false;
            }
        }
        return true;
    };
    TableDataSourceWithHistory.prototype.dataSanizer = function (data) {
        var sanitizedData = __assign({}, data);
        delete sanitizedData._checked;
        delete sanitizedData._id;
        return sanitizedData;
    };
    TableDataSourceWithHistory.prototype.clearHistory = function () {
        this.addedList = [];
        this.updatedList = [];
        this.deletedList = [];
    };
    TableDataSourceWithHistory.prototype.getDeletedList = function () {
        return this.deletedList.map(this.dataSanizer);
    };
    TableDataSourceWithHistory.prototype.getUpdatedList = function () {
        return this.updatedList.map(this.dataSanizer);
    };
    TableDataSourceWithHistory.prototype.getAddedList = function () {
        return this.addedList.map(this.dataSanizer);
    };
    TableDataSourceWithHistory.prototype.toListModifications = function () {
        return {
            addedList: this.getAddedList(),
            updatedList: this.getUpdatedList(),
            deletedList: this.getDeletedList()
        };
    };
    TableDataSourceWithHistory.prototype.mapListModifications = function (rowTransformer) {
        return {
            addedList: this.getAddedList().map(rowTransformer),
            updatedList: this.getUpdatedList().map(rowTransformer),
            deletedList: this.getDeletedList().map(rowTransformer)
        };
    };
    TableDataSourceWithHistory.prototype.tableDataSourceHasBeenModified = function () {
        return !((!this.addedList || (!!this.addedList && this.addedList.length === 0)) &&
            (!this.updatedList || (!!this.updatedList && this.updatedList.length === 0)) &&
            (!this.deletedList || (!!this.deletedList && this.deletedList.length === 0)));
    };
    return TableDataSourceWithHistory;
}(_shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]));



/***/ }),

/***/ "./src/app/shared/utils/file-utils.ts":
/*!********************************************!*\
  !*** ./src/app/shared/utils/file-utils.ts ***!
  \********************************************/
/*! exports provided: FileUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtils", function() { return FileUtils; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-utils */ "./src/app/shared/utils/number-utils.ts");


var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.downloadFile = function (file, fileName) {
        if (!!file && !!fileName) {
            var byteCharacters = atob(file.toString());
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](new Blob([new Uint8Array(byteNumbers)]), fileName);
        }
    };
    FileUtils.getExtension = function (fileName) {
        return !!fileName && fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1) : '';
    };
    FileUtils.getFileContentAsBase64 = function (file, callback) {
        if (!!file) {
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                var fileContent = reader_1.result; // tslint:disable-line:no-any
                fileContent = fileContent.substring(fileContent.indexOf(',') + 1); // Remove data:*/*;base64,
                callback(fileContent);
            };
            reader_1.readAsDataURL(file);
        }
    };
    FileUtils.getFormattedSize = function (size) {
        if (!!size) {
            return size / FileUtils.KILOOCTET < FileUtils.KILOOCTET
                ? _number_utils__WEBPACK_IMPORTED_MODULE_1__["NumberUtils"].roundNumber(size / FileUtils.KILOOCTET) + " Ko"
                : _number_utils__WEBPACK_IMPORTED_MODULE_1__["NumberUtils"].roundNumber(size / FileUtils.KILOOCTET / FileUtils.KILOOCTET) + " Mo";
        }
        else {
            return '';
        }
    };
    FileUtils.KIBIOCTET = 1024;
    FileUtils.KILOOCTET = 1000;
    return FileUtils;
}());



/***/ })

}]);
//# sourceMappingURL=default~engineering-management-dea-dia-dea-dia-module~engineering-management-engineering-management-~42d801af.js.map