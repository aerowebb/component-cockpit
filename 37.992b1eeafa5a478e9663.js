(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3/ER":function(t,e,n){"use strict";(function(t){var r=n("Ju5/"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?r.a.Buffer:void 0,s=a?a.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}}).call(this,n("3UD+")(t))},FfGd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n("sy7D"))},MaMm:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("mrSG"),o=(n("8lOw"),n("w5Jw"),n("4jwn"),n("q0MI"),n("OovH")),i=(n("2XxF"),function(t){function e(e,n,r,o,i,a){var s=t.call(this,e,n)||this;return s.fleetManagementApi=r,s.productStructureManagementApi=o,s.userProfileManagementApi=i,s.bidtSiteApi=a,s}return Object(r.__extends)(e,t),e.prototype.findAllBidoOperation=function(){return t.prototype.post.call(this,this.fleetManagementApi.findAllBidoOperations)},e.prototype.findAllBireSite=function(){return t.prototype.post.call(this,this.productStructureManagementApi.findAllBireSite)},e.prototype.findAllMroCenter=function(){return t.prototype.post.call(this,this.bidtSiteApi.findSiteByUsecaseCodeStockStatus)},e.prototype.findAuthorizedBireSite=function(){return t.prototype.post.call(this,this.productStructureManagementApi.findAuthorizedBireSite)},e.prototype.findBidoUsersWithUseCase=function(e){return t.prototype.post.call(this,this.userProfileManagementApi.findBidoUsersWithUseCase,e)},e}(o.a))},UhuQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n("3PJ4"))},XHR1:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"a",function(){return b});var r=n("mrSG"),o=n("CcnG"),i=n("wd/R"),a=(n("tCJT"),n("J6gT")),s=n("UYhe"),c=n("qYLG"),u=(n("QLLi"),n("v1eH"),n("mZtN"),n("IXZH")),l=n("LCkZ"),p=n("gmqF"),f=n("8jAZ"),d=(n("MaMm"),function(t){return t[t.ACRS=1]="ACRS",t[t.GO_NO_GO=2]="GO_NO_GO",t}({})),b=function(t){function e(e,n,r,o,i){var a=t.call(this,c.a.Write,"DialogWorkPackageComponent")||this;return a.sessionService=e,a.dialogWorkPackageService=n,a.messageService=r,a.propertiesService=o,a.dialogWorkOrderEditService=i,a.wpType=d.ACRS,a.init(),a.loadMroCenterList(),a.loadOperationList(),a.loadStatusList(),a.loadTypeList(),a.loadUserList(),a}return Object(r.__extends)(e,t),e.prototype.ngOnInit=function(){this.fetchDefaultType(),this.workPackage.projectStartDate=this.startDate},e.prototype.isValid=function(){return!(f.a.isNullOrEmpty(this.workPackage.projectName)||!this.workPackage.projectStartDate||!this.workPackage.projectType||f.a.isNullOrEmpty(this.workPackage.bireRepairCenterCode))},e.prototype.validate=function(){this.workPackage.projectStartDate&&this.workPackage.projectDueDate&&i(this.workPackage.projectStartDate).isAfter(i(this.workPackage.projectDueDate))?this.messageService.showWarningMessage(this.getComponentName()+".errorOnDates"):(this.onValidated.emit({workPackage:this.workPackage,workcenter:this.selectedWorkCenter}),this.closeDialog())},e.prototype.init=function(){this.displayAssignedTo=!0,this.displayDescription=!0,this.displayDueDate=!0,this.displayMroCenter=!0,this.displayName=!0,this.displayOperation=!0,this.displayStartDate=!0,this.displayStatus=!0,this.displayWorkCenter=!0,this.startDate=new Date,this.mroCenterList=[],this.operationList=[],this.selectedWorkCenter=void 0,this.typeList=[],this.statusList=[],this.userList=[],this.workShopList=[],this.workPackage||(this.workPackage={}),this.onValidated=new o.EventEmitter},e.prototype.loadMroCenterList=function(){var t=this;this.dialogWorkPackageService.findAuthorizedBireSite().subscribe(function(e){e&&e.forEach(function(t){t.label&&(t.label=t.value+"-"+t.label)}),t.mroCenterList=e?p.a.fromLabelValues(e):[]})},e.prototype.loadOperationList=function(){var t=this;this.dialogWorkPackageService.findAllBidoOperation().subscribe(function(e){t.operationList=p.a.fromLabelValues(e)})},e.prototype.loadStatusList=function(){var t=this;this.propertiesService.getValue(s.a.AIRM_PROJECT_STATUS_MAP).subscribe(function(e){t.statusList=l.a.orEmpty(e)})},e.prototype.loadTypeList=function(){var t=this;this.propertiesService.getValue(s.a.WORK_PACKAGE_TYPE_MAP).subscribe(function(e){t.typeList=l.a.orEmpty(e)})},e.prototype.fetchDefaultType=function(){this.wpType&&(this.workPackage.projectType=""+this.wpType)},e.prototype.loadUserList=function(){var t=this;this.dialogWorkPackageService.findBidoUsersWithUseCase(a.a.UC_AIRM_RECEPTION).subscribe(function(e){var n=l.a.orEmpty(e).map(function(t){return{label:(f.a.orEmpty(t.lastname)+" "+f.a.orEmpty(t.firstname)).trim(),value:t.userId}});t.userList=n.sort(function(t,e){return t.label>e.label?1:t.label<e.label?-1:0})})},e.prototype.getWorkShops=function(){var t=this;this.dialogWorkOrderEditService.loadWarehouseList(this.workPackage.bireRepairCenterCode).subscribe(function(e){t.workShopList=e.map(function(t){return{label:t.label,value:Number(t.value)}})})},e}(u.a)},XIp8:function(t,e,n){"use strict";var r=n("oSzE"),o=n("Y7yP"),i=function(){try{var t=Object(o.a)(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),a=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},s=n("YHEm"),c=Object.prototype.hasOwnProperty,u=function(t,e,n){var r=t[e];c.call(t,e)&&Object(s.a)(r,n)&&(void 0!==n||e in t)||a(t,e,n)},l=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var c=e[i],l=r?r(n[c],t[c],c,n,t):void 0;void 0===l&&(l=t[c]),o?a(n,c,l):u(n,c,l)}return n},p=n("mkut"),f=n("7gMY"),d=n("IzLi"),b=n("pyRK"),y=Object.prototype.hasOwnProperty,h=n("5WsY"),j=function(t){return Object(h.a)(t)?Object(f.a)(t,!0):function(t){if(!Object(d.a)(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=Object(b.a)(t),n=[];for(var r in t)("constructor"!=r||!e&&y.call(t,r))&&n.push(r);return n}(t)},v=n("3/ER"),g=n("jN84"),m=n("tPH9"),O=n("U6JX"),w=Object(O.a)(Object.getPrototypeOf,Object),k=n("WJ6P"),A=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Object(m.a)(e,Object(g.a)(t)),t=w(t);return e}:k.a,S=n("TFwu"),P=n("25cm"),C=function(t){return Object(P.a)(t,j,A)},L=n("YM6B"),M=Object.prototype.hasOwnProperty,E=n("Ce4a"),D=function(t){var e=new t.constructor(t.byteLength);return new E.a(e).set(new E.a(t)),e},T=/\w*$/,I=n("ylTp"),R=I.a?I.a.prototype:void 0,_=R?R.valueOf:void 0,U=Object.create,W=function(){function t(){}return function(e){if(!Object(d.a)(e))return{};if(U)return U(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),x=n("/1FC"),B=n("WOAq"),N=n("EUcb"),V=n("ovuK"),F=n("xutz"),G=F.a&&F.a.isMap,J=G?Object(V.a)(G):function(t){return Object(N.a)(t)&&"[object Map]"==Object(L.a)(t)},Y=F.a&&F.a.isSet,H=Y?Object(V.a)(Y):function(t){return Object(N.a)(t)&&"[object Set]"==Object(L.a)(t)},z={};z["[object Arguments]"]=z["[object Array]"]=z["[object ArrayBuffer]"]=z["[object DataView]"]=z["[object Boolean]"]=z["[object Date]"]=z["[object Float32Array]"]=z["[object Float64Array]"]=z["[object Int8Array]"]=z["[object Int16Array]"]=z["[object Int32Array]"]=z["[object Map]"]=z["[object Number]"]=z["[object Object]"]=z["[object RegExp]"]=z["[object Set]"]=z["[object String]"]=z["[object Symbol]"]=z["[object Uint8Array]"]=z["[object Uint8ClampedArray]"]=z["[object Uint16Array]"]=z["[object Uint32Array]"]=!0,z["[object Error]"]=z["[object Function]"]=z["[object WeakMap]"]=!1;var K=function t(e,n,o,i,a,s){var c,f=1&n,y=2&n,h=4&n;if(o&&(c=a?o(e,i,a,s):o(e)),void 0!==c)return c;if(!Object(d.a)(e))return e;var m=Object(x.a)(e);if(m){if(c=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&M.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(e),!f)return function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(e,c)}else{var O=Object(L.a)(e),k="[object Function]"==O||"[object GeneratorFunction]"==O;if(Object(B.a)(e))return Object(v.a)(e,f);if("[object Object]"==O||"[object Arguments]"==O||k&&!a){if(c=y||k?{}:function(t){return"function"!=typeof t.constructor||Object(b.a)(t)?{}:W(w(t))}(e),!f)return y?function(t,e){return l(t,A(t),e)}(e,function(t,n){return t&&l(e,j(e),t)}(c)):function(t,e){return l(t,Object(g.a)(t),e)}(e,function(t,e){return t&&l(e,Object(p.a)(e),t)}(c,e))}else{if(!z[O])return a?e:{};c=function(t,e,n){var r,o,i=t.constructor;switch(e){case"[object ArrayBuffer]":return D(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var n=e?D(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var n=e?D(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,n);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return(o=new(r=t).constructor(r.source,T.exec(r))).lastIndex=r.lastIndex,o;case"[object Set]":return new i;case"[object Symbol]":return _?Object(_.call(t)):{}}}(e,O,f)}}s||(s=new r.a);var P=s.get(e);if(P)return P;if(s.set(e,c),H(e))return e.forEach(function(r){c.add(t(r,n,o,r,e,s))}),c;if(J(e))return e.forEach(function(r,i){c.set(i,t(r,n,o,i,e,s))}),c;var E=h?y?C:S.a:y?keysIn:p.a,I=m?void 0:E(e);return function(r,i){for(var a=-1,l=null==r?0:r.length;++a<l&&!1!==(p=r[a],f=a,I&&(p=e[f=p]),void u(c,f,t(p,n,o,f,e,s))););var p,f}(I||e),c};e.a=function(t){return K(t,5)}},agHx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n("LIyE"))},sP6A:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c});var r=n("CcnG"),o=(n("HQi4"),n("Ip0R")),i=r["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"animation",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translateY(5%)",opacity:0},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},options:void 0},{type:1,expr:"void => visible",animation:{type:4,styles:null,timings:"{{showTransitionParams}}"},options:null},{type:1,expr:"visible => void",animation:{type:4,styles:null,timings:"{{hideTransitionParams}}"},options:null}],options:{}}]}});function a(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,1,"a",[["class","ui-overlaypanel-close ui-state-default"],["tabindex","0"]],null,[[null,"click"],[null,"keydown.enter"]],function(t,e,n){var r=!0,o=t.component;return"click"===e&&(r=!1!==o.onCloseClick(n)&&r),"keydown.enter"===e&&(r=!1!==o.hide()&&r),r},null,null)),(t()(),r["\u0275eld"](1,0,null,null,0,"span",[["class","ui-overlaypanel-close-icon pi pi-times"]],null,null,null,null,null))],null,null)}function s(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,8,"div",[],[[24,"@animation",0]],[[null,"@animation.start"]],function(t,e,n){var r=!0;return"@animation.start"===e&&(r=!1!==t.component.onAnimationStart(n)&&r),r},null,null)),r["\u0275did"](1,278528,null,0,o.NgClass,[r.IterableDiffers,r.KeyValueDiffers,r.ElementRef,r.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r["\u0275did"](2,278528,null,0,o.NgStyle,[r.KeyValueDiffers,r.ElementRef,r.Renderer2],{ngStyle:[0,"ngStyle"]},null),r["\u0275pod"](3,{showTransitionParams:0,hideTransitionParams:1}),r["\u0275pod"](4,{value:0,params:1}),(t()(),r["\u0275eld"](5,0,null,null,1,"div",[["class","ui-overlaypanel-content"]],null,null,null,null,null)),r["\u0275ncd"](null,0),(t()(),r["\u0275and"](16777216,null,null,1,null,a)),r["\u0275did"](8,16384,null,0,o.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,e){var n=e.component;t(e,1,0,n.styleClass,"ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow"),t(e,2,0,n.style),t(e,8,0,n.showCloseIcon)},function(t,e){var n=e.component,r=t(e,4,0,"visible",t(e,3,0,n.showTransitionOptions,n.hideTransitionOptions));t(e,0,0,r)})}function c(t){return r["\u0275vid"](0,[(t()(),r["\u0275and"](16777216,null,null,1,null,s)),r["\u0275did"](1,16384,null,0,o.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,e){t(e,1,0,e.component.visible)},null)}}}]);