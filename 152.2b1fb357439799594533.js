(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{hvc3:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t.d(e,"b",function(){return i});var o=t("CcnG"),l=new o.InjectionToken("DYNAMIC_COMPONENT"),i=new o.InjectionToken("DYNAMIC_COMPONENT_MANIFESTS")},krrP:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var o=t("XlPw"),l=t("0/uQ"),i=(t("cxgq"),t("hvc3")),r=function(){function n(n,e,t,o){this.manifests=n,this.injector=e,this.loader=t,this.loaderService=o}return n.prototype.getComponentFactory=function(n,e){var t=this,r=this.manifests.find(function(e){return e.componentId===n});if(!r)return Object(o.a)('DynamicComponentLoader: Unknown componentId "'+n+'"');this.loaderService.showModuleLoadingBar();var a=this.loader.load(r.loadChildren).then(function(o){var l=o.create(e||t.injector),r=l.injector.get(i.a);if(!r)throw t.dynamicComponentLoaderError(n);var a=r.find(function(e){return e.prototype.getComponentName.apply(void 0)===n});if(!a)throw t.dynamicComponentLoaderError(n);return l.componentFactoryResolver.resolveComponentFactory(a)});return Object(l.a)(a)},n.prototype.dynamicComponentLoaderError=function(n){return new Error('DynamicComponentLoader: Dynamic module for componentId "'+n+'" does not contain DYNAMIC_COMPONENT as a provider.')},n}()},kw2b:function(n,e,t){"use strict";t.r(e);var o=t("CcnG"),l=t("mrSG"),i=t("ny24"),r=t("8wKG"),a=t("qYLG"),u=t("KRL6"),c=t("BIm4"),s=t("nhdH"),d=t("cxgq"),p=t("mZtN"),f=t("60Vt"),m=t("xbox"),g=t("8jAZ"),v=t("tSMa"),h=function(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,l,i=t.call(n),r=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)r.push(o.value)}catch(a){l={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(l)throw l.error}}return r},O=function(n){function e(e,t,o,l,i,r,u,c){var s=n.call(this,a.a.Write)||this;return s.appVersionService=e,s.dateService=t,s.menuService=o,s.sessionService=l,s.tabService=i,s.favoriteService=r,s.loaderService=u,s.translateService=c,s.favorites=[],s.favoriteToOpen=void 0,s.selectedMenuEntry=void 0,s.selectedSubmenuEntry=void 0,s.loadFavorites(),s.setupObservables(),s.imgState="hidden",s.mainContainerState="hidden",s.setupAnimations(),s}return Object(l.__extends)(e,n),e.prototype.getComponentName=function(){return"HomeComponent"},e.prototype.ngOnInit=function(){this.loaderService.hideModuleLoadingBar()},e.prototype.isFavoriteToOpen=function(n){return!!this.favoriteToOpen&&(this.favoriteToOpen.objectId?n.componentId===this.favoriteToOpen.componentId&&n.objectId===this.favoriteToOpen.objectId:n.componentId===this.favoriteToOpen.componentId)},e.prototype.onClickMenuEntry=function(n){this.selectedMenuEntry&&n.key===this.selectedMenuEntry.key?this.hideMenuOverlay():this.displayMenuOverlay(n)},e.prototype.onHoverMenuEntry=function(n){this.selectedMenuEntry&&n.key!==this.selectedMenuEntry.key&&this.displayMenuOverlay(n)},e.prototype.openFavorite=function(n){var e=n.componentId,t="transaction."+e,o={id:this.tabService.generateId(),componentId:e,objectId:n.objectId,openMode:n.objectId?a.a.Read:a.a.Write};this.tabService.open(this.tabService.create(o,t,!0))},e.prototype.removeFavorite=function(n){this.favoriteService.updateFavoriteState(!0,n.componentId,n.objectId,n.context)},e.prototype.toggleDefaultFavorite=function(n){this.favorites.forEach(function(n){return n.shouldOpenAtStartup=!1}),this.favoriteToOpen&&this.favoriteToOpen.componentId===n.componentId&&this.favoriteToOpen.objectId===n.objectId?this.removeDefaultFavorite(n):this.setDefaultFavorite(n)},e.prototype.displayMenuOverlay=function(n){this.selectedMenuEntry=n,this.imgState="hidden"},e.prototype.formatFavoriteContext=function(n){n.context&&this.translateService.get(n.context).subscribe(function(e){n.formattedContext=g.a.isNullOrEmpty(e)?n.context:e})},e.prototype.getLogoUri=function(n){switch(r.a.COMPONENTS_ROOT[n.componentId]){case r.a.MENU_ADMINISTRATION:return e.administrationLogoUri;case r.a.MENU_COLLABORATIVE_COCKPIT:return e.collaborativeCockpitLogoUri;case r.a.MENU_ENGINEERING_DATA:return e.engineeringDataLogoUri;case r.a.MENU_FLEET_MANAGEMENT:return e.fleetManagementLogoUri;case r.a.MENU_FLIGHT_OPERATIONS:return e.flightOperationLogoUri;case r.a.MENU_HUMAN_RESOURCES:return e.humanResourcesLogoUri;case r.a.MENU_LOGISTICS:return e.logisticsLogoUri;case r.a.MENU_MAINTENANCE:return e.maintenanceLogoUri;default:return}},e.prototype.hideMenuOverlay=function(){this.selectedMenuEntry=void 0,this.imgState="visible"},e.prototype.loadFavorites=function(){var n=this;this.favoriteService.favorites().subscribe(function(e){n.favorites=e||[],n.favorites=n.favorites.map(function(e){return n.formatFavoriteContext(e),e.img=n.getLogoUri(e),e}),n.selectFavoriteToOpen()})},e.prototype.removeDefaultFavorite=function(n){var e=this;this.favoriteService.removeDefaultFavorite().subscribe(function(){n.shouldOpenAtStartup=!1,e.favoriteToOpen=void 0})},e.prototype.selectFavoriteToOpen=function(){var n=this;this.favoriteService.getDefaultFavorite().subscribe(function(e){if(e){var t=n.favorites.find(function(n){return n.componentId===e.componentId&&n.objectId===e.objectId});t&&(t.shouldOpenAtStartup=!0,n.favoriteToOpen=t,n.openFavorite(n.favoriteToOpen))}})},e.prototype.setDefaultFavorite=function(n){var e=this;this.favoriteService.setDefaultFavorite(n).subscribe(function(){n.shouldOpenAtStartup=!0,e.favoriteToOpen=n})},e.prototype.setupAnimations=function(){var n=this;setTimeout(function(){n.imgState="visible"},e.IMG_STATE_TIMEOUT),setTimeout(function(){n.mainContainerState="visible"},e.MAIN_CONTAINER_STATE_TIMEOUT)},e.prototype.setupObservables=function(){var n=this;this.favoriteService.favoriteAdded$.pipe(Object(i.a)(this.unsubscribe)).subscribe(function(e){n.formatFavoriteContext(e),e.img=n.getLogoUri(e),n.favorites=function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(h(arguments[e]));return n}(n.favorites,[e]),n.favoriteService.confirmFavoriteUpdate(n.favoriteService.toString(e))},function(e){n.favoriteService.reportFavoriteErrorUpdate(n.favoriteService.toString(e))}),this.favoriteService.favoriteRemoved$.pipe(Object(i.a)(this.unsubscribe)).subscribe(function(e){n.favorites=n.favorites.filter(function(n){return!(n.componentId===e.componentId&&(g.a.isNullOrEmpty(n.objectId)&&g.a.isNullOrEmpty(e.objectId)||n.objectId===e.objectId))}),n.favoriteToOpen&&n.favoriteToOpen.componentId===e.componentId&&(g.a.isNullOrEmpty(n.favoriteToOpen.objectId)&&g.a.isNullOrEmpty(e.objectId)||n.favoriteToOpen.objectId===e.objectId)&&n.removeDefaultFavorite(e),n.favoriteService.confirmFavoriteUpdate(n.favoriteService.toString(e))},function(e){n.favoriteService.reportFavoriteErrorUpdate(n.favoriteService.toString(e))})},e.IMG_STATE_TIMEOUT=500,e.MAIN_CONTAINER_STATE_TIMEOUT=250,e.administrationLogoUri="assets/img/menu-administration.svg",e.collaborativeCockpitLogoUri="assets/img/menu-collaborative-cockpit.svg",e.engineeringDataLogoUri="assets/img/menu-engineering-data.svg",e.fleetManagementLogoUri="assets/img/menu-fleet-management.svg",e.flightOperationLogoUri="assets/img/menu-flight-operations.svg",e.humanResourcesLogoUri="assets/img/menu-human-resources.svg",e.logisticsLogoUri="assets/img/menu-logistics.svg",e.maintenanceLogoUri="assets/img/menu-maintenance.svg",e}(m.a),C=function(){return function(){}}(),M=t("NcP4"),_=t("Ip0R"),y=t("A7o+"),b=o["\u0275crt"]({encapsulation:0,styles:[['[_nghost-%COMP%]   #home-component[_ngcontent-%COMP%]{background-attachment:fixed;background-image:url(home-background.1e7aea59755001e7d432.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover;height:calc(100vh - 40px);margin-top:40px}[_nghost-%COMP%]   #home-component[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{min-height:100%}[_nghost-%COMP%]   #home-component[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{margin:0 auto;max-width:calc(100% - 2 * 8rem)}[_nghost-%COMP%]   #home-component[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]   .release-version[_ngcontent-%COMP%]{bottom:8px;position:absolute;right:8px;text-align:right;width:8rem}[_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:60vh;align-items:center;justify-content:center}[_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-aw[_ngcontent-%COMP%]{width:40rem}[_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-client[_ngcontent-%COMP%]{margin-top:32px;width:24rem}[_nghost-%COMP%]   .tiles-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:4px;margin:8px;width:calc(100% / 6 - 8px * 2);box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08);position:relative;transition-duration:.2s;transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}@media screen and (max-width:1280px){[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]{width:calc(100% / 3 - 8px * 2)}}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]:focus-within:not(:active), [_nghost-%COMP%]   .tile[_ngcontent-%COMP%]:hover:not(:active){box-shadow:0 3px 8px 0 rgba(0,0,0,.2),0 0 0 1px rgba(0,0,0,.08)}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]   .tile-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;border-top-left-radius:4px;border-top-right-radius:4px;background:#fafafa;height:calc(8px * 4);padding:0 calc(8px / 2);width:100%}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]   .tile-header[_ngcontent-%COMP%]   .tile-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;flex-grow:1;font-size:.875rem;padding-left:calc(8px / 2)}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]   .tile-header[_ngcontent-%COMP%]   .tile-favorite[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]   .tile-header[_ngcontent-%COMP%]   .tile-favorite[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]:hover::before{color:#707070;content:"\\f005"}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]   .tile-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;cursor:pointer;height:calc(calc(8px * 4) + calc(8px * 4)/ 2);justify-content:center;width:100%}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]   .tile-context[_ngcontent-%COMP%]{display:flex;flex-direction:row;line-height:1;max-height:calc(8px * 2);min-height:calc(8px * 2);padding:0 calc(8px / 2)}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]   .tile-context[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]:focus   .tile-remove[_ngcontent-%COMP%], [_nghost-%COMP%]   .tile[_ngcontent-%COMP%]:hover   .tile-remove[_ngcontent-%COMP%]{opacity:1;transition-delay:.5s}[_nghost-%COMP%]   .tile-remove[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;background:linear-gradient(to left,#fafafa 60%,transparent);border-top-right-radius:4px;color:rgba(90,90,90,.7);cursor:pointer;height:calc(8px * 4);justify-content:flex-end;opacity:0;position:absolute;right:0;width:2.5rem;transition:opacity 150ms}[_nghost-%COMP%]   .tile-remove[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .tile-remove[_ngcontent-%COMP%]:hover{opacity:1;transition:none}[_nghost-%COMP%]   .tile-remove[_ngcontent-%COMP%]:hover > i[_ngcontent-%COMP%]{color:#5a5a5a}[_nghost-%COMP%]   .tile-remove[_ngcontent-%COMP%]:active > i[_ngcontent-%COMP%]{color:#4285f4}[_nghost-%COMP%]   .tile-remove[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:1.125rem;padding-right:calc(8px / 2)}[_nghost-%COMP%]   .tile-empty[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:4px;margin:8px;width:calc(100% / 6 - 8px * 2);border:1px dashed #595959;color:#595959;cursor:default;height:calc(calc(8px * 4) + calc(calc(8px * 4) + calc(8px * 4)/ 2));padding:8px;text-align:center}@media screen and (max-width:1280px){[_nghost-%COMP%]   .tile-empty[_ngcontent-%COMP%]{width:calc(100% / 3 - 8px * 2)}}[_nghost-%COMP%]   .tile-empty[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]{color:#01579b}[_nghost-%COMP%]   .favorites-tip[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline;color:#707070;cursor:default;font-size:.6875rem;justify-content:center;width:100%}']],data:{animation:[{type:7,name:"imgState",definitions:[{type:0,name:"hidden",styles:{type:6,styles:{display:"none",opacity:"0"},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{opacity:"1"},offset:null},options:void 0},{type:1,expr:"hidden => visible",animation:[{type:6,styles:{display:"block"},offset:null},{type:4,styles:null,timings:"1000ms ease-in"}],options:null}],options:{}},{type:7,name:"mainContainerState",definitions:[{type:0,name:"hidden",styles:{type:6,styles:{opacity:"0"},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{opacity:"1"},offset:null},options:void 0},{type:1,expr:"hidden => visible",animation:[{type:4,styles:null,timings:"1000ms"}],options:null}],options:{}}]}});function P(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,0,"img",[["class","logo-client"],["src","assets/img/client.svg"]],null,null,null,null,null))],null,null)}function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-fw fa-star favorite-entry"]],null,null,null,null,null))],null,null)}function I(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-fw fa-star-o"]],null,null,null,null,null))],null,null)}function S(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](1,null,["",""]))],null,function(n,e){n(e,1,0,e.parent.context.$implicit.formattedContext)})}function T(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,16,"div",[["class","tile"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,11,"div",[["class","tile-header"]],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,4,"div",[["class","tile-favorite"]],null,[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.toggleDefaultFavorite(n.context.$implicit)&&o),o},null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,x)),o["\u0275did"](4,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,I)),o["\u0275did"](6,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](7,0,null,null,2,"div",[["class","tile-title"]],null,[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.openFavorite(n.context.$implicit)&&o),o},null,null)),(n()(),o["\u0275ted"](8,null,[" "," "])),o["\u0275pid"](131072,y.i,[y.j,o.ChangeDetectorRef]),(n()(),o["\u0275eld"](10,0,null,null,2,"div",[["class","tile-remove"]],null,[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.removeFavorite(n.context.$implicit)&&o),o},null,null)),(n()(),o["\u0275eld"](11,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["close"])),(n()(),o["\u0275eld"](13,0,null,null,3,"div",[["class","tile-content"]],null,[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.openFavorite(n.context.$implicit)&&o),o},null,null)),(n()(),o["\u0275eld"](14,0,null,null,2,"div",[["class","tile-context"]],null,null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,S)),o["\u0275did"](16,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,4,0,t.isFavoriteToOpen(e.context.$implicit)),n(e,6,0,!t.isFavoriteToOpen(e.context.$implicit)),n(e,16,0,e.context.$implicit.formattedContext)},function(n,e){n(e,8,0,o["\u0275unv"](e,8,0,o["\u0275nov"](e,9).transform("transaction."+e.context.$implicit.componentId)))})}function E(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"div",[["class","tile-empty"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Your favorites "])),(n()(),o["\u0275eld"](2,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-fw fa-star favorite-icon"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" will appear here. "]))],null,null)}function w(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o["\u0275ted"](1,null,["Client ",""]))],null,function(n,e){n(e,1,0,e.component.sessionService.client)})}function N(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o["\u0275ted"](1,null,[" "," "]))],null,function(n,e){var t=e.component;n(e,1,0,t.dateService.dateWitCustomFormatToString(t.appVersionService.appVersion.versionDate,"LL"))})}function L(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,14,"div",[["class","release-version"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o["\u0275ted"](2,null,[""," ",""])),(n()(),o["\u0275and"](16777216,null,null,1,null,w)),o["\u0275did"](4,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](5,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o["\u0275ted"](6,null,["",""])),(n()(),o["\u0275eld"](7,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o["\u0275ted"](8,null,["",""])),(n()(),o["\u0275eld"](9,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o["\u0275ted"](10,null,["",""])),(n()(),o["\u0275eld"](11,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o["\u0275ted"](12,null,["",""])),(n()(),o["\u0275and"](16777216,null,null,1,null,N)),o["\u0275did"](14,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,4,0,t.sessionService.client),n(e,14,0,t.appVersionService.appVersion.versionDate)},function(n,e){var t=e.component;n(e,2,0,t.sessionService.userFirstName,t.sessionService.userLastName),n(e,6,0,t.sessionService.system),n(e,8,0,t.sessionService.instance),n(e,10,0,t.appVersionService.appVersion.version),n(e,12,0,t.appVersionService.appVersion.copyright)})}function R(n){return o["\u0275vid"](0,[o["\u0275qud"](402653184,1,{pageEltRef:0}),o["\u0275qud"](671088640,2,{dropdownList:1}),o["\u0275qud"](671088640,3,{checkboxList:1}),o["\u0275qud"](671088640,4,{checkboxElementRefList:1}),o["\u0275qud"](671088640,5,{calendarList:1}),o["\u0275qud"](671088640,6,{menuItemElementRefList:1}),o["\u0275qud"](671088640,7,{tabList:1}),o["\u0275qud"](671088640,8,{tabElementRefList:1}),o["\u0275qud"](671088640,9,{tabGroupList:1}),(n()(),o["\u0275eld"](9,0,null,null,15,"div",[["class","page-wrapper"],["id","home-component"]],[[24,"@mainContainerState",0]],null,null,null,null)),(n()(),o["\u0275eld"](10,0,null,null,14,"div",[["class","page-container"]],null,null,null,null,null)),(n()(),o["\u0275eld"](11,0,null,null,3,"div",[["class","logo-container"]],null,null,null,null,null)),(n()(),o["\u0275eld"](12,0,null,null,0,"img",[["class","logo-aw"],["src","assets/img/home_logo.svg"]],[[24,"@imgState",0]],null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,P)),o["\u0275did"](14,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](15,0,null,null,7,"div",[["class","page-content"]],null,null,null,null,null)),(n()(),o["\u0275eld"](16,0,null,null,6,"div",[["class","grid-row"]],null,null,null,null,null)),(n()(),o["\u0275eld"](17,0,null,null,5,"div",[["class","grid-cell--12"]],null,null,null,null,null)),(n()(),o["\u0275eld"](18,0,null,null,4,"div",[["class","tiles-container"]],null,null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,T)),o["\u0275did"](20,278528,null,0,_.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,E)),o["\u0275did"](22,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,L)),o["\u0275did"](24,16384,null,0,_.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,14,0,t.sessionService.isSpecificBRASIDAS||t.sessionService.isSpecificDassault),n(e,20,0,t.favorites),n(e,22,0,0===t.favorites.length),n(e,24,0,t.appVersionService.appVersion)},function(n,e){var t=e.component;n(e,9,0,t.mainContainerState),n(e,12,0,t.imgState)})}function F(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"aw-home",[],null,null,null,R,b)),o["\u0275did"](1,8896512,null,0,O,[u.a,c.a,v.a,p.a,f.a,s.a,d.a,y.j],null,null)],function(n,e){n(e,1,0)},null)}var k=o["\u0275ccf"]("aw-home",O,F,{userWorkflow:"userWorkflow"},{},[]),j=t("gIcY"),U=t("eDkP"),A=t("Fzqc"),D=t("mVsa"),V=t("M2Lx"),q=t("v9Dh"),G=t("ZYjt"),Y=t("Wf4p"),$=t("uGex"),H=t("2KQc"),z=t("R9q2"),B=t("wCdj"),W=t("xtm+"),Z=t("dWZg"),K=t("UodH"),J=t("u7R8"),Q=t("SMsm"),X=t("4c35"),nn=t("qAlS"),en=t("lLAP"),tn=t("La40"),on=t("6Wmm"),ln=t("CBL3"),rn=t("C6PV"),an=t("BXjT"),un=t("7KBv"),cn=t("0LgH"),sn=t("seP3"),dn=t("d906"),pn=t("+r75"),fn=t("sMPM"),mn=t("ZYCi"),gn=t("hvc3");t.d(e,"HomeModuleNgFactory",function(){return vn});var vn=o["\u0275cmf"](C,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[M.a,k]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[o.LOCALE_ID,[2,_["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,j["\u0275angular_packages_forms_forms_j"],j["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,U.c,U.c,[U.i,U.e,o.ComponentFactoryResolver,U.h,U.f,o.Injector,o.NgZone,_.DOCUMENT,A.b,[2,_.Location]]),o["\u0275mpd"](5120,U.j,U.k,[U.c]),o["\u0275mpd"](5120,D.b,D.g,[U.c]),o["\u0275mpd"](4608,V.c,V.c,[]),o["\u0275mpd"](5120,q.b,q.c,[U.c]),o["\u0275mpd"](4608,G.HAMMER_GESTURE_CONFIG,Y.c,[[2,Y.g],[2,Y.l]]),o["\u0275mpd"](5120,$.a,$.b,[U.c]),o["\u0275mpd"](4608,H.a,H.a,[y.j]),o["\u0275mpd"](4608,z.a,z.a,[]),o["\u0275mpd"](4608,B.a,B.a,[]),o["\u0275mpd"](1073742336,_.CommonModule,_.CommonModule,[]),o["\u0275mpd"](1073742336,j["\u0275angular_packages_forms_forms_bc"],j["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,j.FormsModule,j.FormsModule,[]),o["\u0275mpd"](1073742336,W.a,W.a,[]),o["\u0275mpd"](1073742336,y.g,y.g,[]),o["\u0275mpd"](1073742336,A.a,A.a,[]),o["\u0275mpd"](1073742336,Y.l,Y.l,[[2,Y.d],[2,G.HAMMER_LOADER]]),o["\u0275mpd"](1073742336,Z.b,Z.b,[]),o["\u0275mpd"](1073742336,Y.u,Y.u,[]),o["\u0275mpd"](1073742336,K.c,K.c,[]),o["\u0275mpd"](1073742336,J.e,J.e,[]),o["\u0275mpd"](1073742336,Q.c,Q.c,[]),o["\u0275mpd"](1073742336,X.g,X.g,[]),o["\u0275mpd"](1073742336,nn.ScrollingModule,nn.ScrollingModule,[]),o["\u0275mpd"](1073742336,U.g,U.g,[]),o["\u0275mpd"](1073742336,D.e,D.e,[]),o["\u0275mpd"](1073742336,V.d,V.d,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,tn.k,tn.k,[]),o["\u0275mpd"](1073742336,q.e,q.e,[]),o["\u0275mpd"](1073742336,on.b,on.b,[]),o["\u0275mpd"](1073742336,ln.a,ln.a,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,an.a,an.a,[]),o["\u0275mpd"](1073742336,un.a,un.a,[]),o["\u0275mpd"](1073742336,cn.a,cn.a,[]),o["\u0275mpd"](1073742336,Y.s,Y.s,[]),o["\u0275mpd"](1073742336,Y.q,Y.q,[]),o["\u0275mpd"](1073742336,sn.d,sn.d,[]),o["\u0275mpd"](1073742336,$.d,$.d,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,pn.a,pn.a,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,C,C,[]),o["\u0275mpd"](1024,mn.ROUTES,function(){return[[]]},[]),o["\u0275mpd"](256,gn.a,[O],[])])})},sMPM:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var o=t("CcnG"),l=t("ZYCi"),i=t("krrP"),r=t("hvc3"),a=function(){function n(){}return n.forRoot=function(e){return{ngModule:n,providers:[i.a,{provide:o.NgModuleFactoryLoader,useClass:o.SystemJsNgModuleLoader},{provide:l.ROUTES,useValue:e,multi:!0},{provide:r.b,useValue:e}]}},n.forChild=function(e){return{ngModule:n,providers:[{provide:o.ANALYZE_FOR_ENTRY_COMPONENTS,useValue:e,multi:!0},{provide:l.ROUTES,useValue:[],multi:!0},{provide:r.a,useValue:e}]}},n}()}}]);