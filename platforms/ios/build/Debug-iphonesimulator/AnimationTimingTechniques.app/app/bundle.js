require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the\nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".lbl"],"declarations":[{"type":"declaration","property":"background-color","value":"aquamarine"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/animation-helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amountFromTo", function() { return amountFromTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
function amountFromTo(range) {
    return (t) => {
        const ret = range.from + t * (range.to - range.from);
        return ret;
    };
}
function animate(duration, defs) {
    return new Promise((resolve) => {
        const start = new Date();
        const timerId = setInterval(() => {
            const timePassed = new Date().valueOf() - start.valueOf();
            let progress = timePassed / duration;
            if (progress > 1)
                progress = 1;
            for (let i = 0; i < defs.length; i++) {
                const def = defs[i];
                const delta = def.curve(progress);
                const v = amountFromTo(def.getRange())(delta);
                def.step(v);
            }
            if (progress === 1) {
                clearInterval(timerId);
                resolve;
            }
        }, 17);
    });
}


/***/ }),

/***/ "./app/animation/animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_core_ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/index.js");
/* harmony import */ var _animation_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/animation-helpers.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");





class AnimationComponent {
    constructor() { }
    ngOnInit() { }
    onTap(args) {
        //this.tech1(args)
        this.tech2(args);
    }
    tech1(args) {
        const view = args.object;
        const target = view.page.getViewById('lbl');
        /* NativeScript animate func. this api involves so many things. */
        target.originY = 0;
        target.animate({
            //backgroundColor: new Color("red"),
            height: 400,
            duration: 3000,
            //curve uses AnimationCurve enum you can do like this
            //curve: 'spring'
            curve: _nativescript_core_ui_enums__WEBPACK_IMPORTED_MODULE_1__["AnimationCurve"].spring
            // or you can set your onw animation like this
            //curve: AnimationCurve.cubicBezier(.17,.67,.95,.07)
            //these numbers coming from here https://cubic-bezier.com/#.17,.67,.95,.07
            //using this web site you can set your own animation curve
        });
    }
    tech2(args) {
        const view = args.object;
        const target = view.page.getViewById('lbl');
        const def = {
            getRange: () => { return { from: 40, to: 400 }; },
            curve: t => t,
            step: (v) => {
                target.height = v;
            }
        };
        //coming from our animation-helpers.ts
        Object(_animation_helpers__WEBPACK_IMPORTED_MODULE_2__["animate"])(3000, [def]);
    }
}
AnimationComponent.ɵfac = function AnimationComponent_Factory(t) { return new (t || AnimationComponent)(); };
AnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimationComponent, selectors: [["ns-animation"]], decls: 5, vars: 0, consts: [["title", "Animation", "backgroundColor", "lightBlue"], [1, "p-20"], ["text", "Tap the button", 1, "h1", "text-center"], ["text", "TAP", 1, "-primary", 3, "tap"], ["id", "lbl", "text", " ", 1, "h2", "text-center", "lbl"]], template: function AnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "StackLayout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "Button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function AnimationComponent_Template_Button_tap_3_listener($event) { return ctx.onTap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-animation',
                templateUrl: 'animation.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/animation/animation.component.ts");





const routes = [
    { path: "", redirectTo: "animation", pathMatch: "full" },
    { path: "animation", component: _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__["AnimationComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ns-app"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "page-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["PageRouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-app",
                templateUrl: "./app.component.html"
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _app_animation_animation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/animation/animation.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _app_animation_animation_component__WEBPACK_IMPORTED_MODULE_4__["AnimationComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_animation_animation_component__WEBPACK_IMPORTED_MODULE_4__["AnimationComponent"]
                ],
                providers: [],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hbmltYXRpb24taGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYW5pbWF0aW9uL2FuaW1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwifi9wYWNrYWdlLmpzb25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLCtHQUFpRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN4SyxnRUFBZ0UsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDdkssb0VBQW9FLG1CQUFPLENBQUMsb0lBQWtHO0FBQzlLLG1FQUFtRSxtQkFBTyxDQUFDLG9JQUFrRyxHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSxpakJBQWlqQixFQUFFLGlFQUFpRSxFQUFFLG9FQUFvRSxFQUFFLDJKQUEySixFQUFFLHlJQUF5SSxFQUFFLCtEQUErRCx5REFBeUQsRUFBRSxFQUFFLG9EQUFvRCx3RUFBd0UsRUFBRTtBQUM1OEMsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFD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QUE7QUFBQTtBQUFBO0FBQTBDOzs7QUFNbkMsTUFBTSxZQUFZOzt3RUFBWixZQUFZOzRGQUFaLFlBQVk7UUNOekIsNkVBQ0U7UUFBQSxnRkFBeUM7UUFDM0MsNERBQWE7OzZGRElBLFlBQVk7Y0FKeEIsdURBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsV0FBVyxFQUFFLHNCQUFzQjthQUN0Qzs7Ozs7Ozs7OztBRUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ0E7QUFFSDtBQUNUO0FBQzJCOztBQW1CbkUsTUFBTSxTQUFTOzt3RkFBVCxTQUFTLGNBZmQsMkRBQVk7NElBZVAsU0FBUyxtQkFMUCxFQUFFLFlBUko7WUFDTCx3RUFBa0I7WUFDbEIsb0VBQWdCO1NBQ25CO21JQVVRLFNBQVMsbUJBUmQsMkRBQVk7UUFDWixxRkFBa0IsYUFMbEIsd0VBQWtCO1FBQ2xCLG9FQUFnQjs2RkFXWCxTQUFTO2NBakJyQixzREFBUTtlQUFDO2dCQUNOLFNBQVMsRUFBRTtvQkFDUCwyREFBWTtpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsd0VBQWtCO29CQUNsQixvRUFBZ0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDViwyREFBWTtvQkFDWixxRkFBa0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCw4REFBZ0I7aUJBQ25CO2FBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRCxPQUFPLEVBQUUsc0JBQVMsQ0FBRSwrRUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGNBQWdGO0FBQ047QUFDMUUsc0RBQXNFO0FBQ3RFLHdCQUF5RDtBQUN6RCxTQUF5RTtBQUN6RSxRQUF3RTtBQUN4RSxZQUFtRjtBQUNuRixRQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnpELDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlXFxuTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL25hdGl2ZXNjcmlwdC90aGVtZVxcblRoZSBpbXBvcnRlZCBDU1MgcnVsZXMgbXVzdCBwcmVjZWRlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcy5cXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcblRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLiBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgYWxsIEJ1dHRvbnMgdGhhdCBoYXZlIHRoZVxcblxcXCItcHJpbWFyeVxcXCIgY2xhc3MgbW9kaWZpZXIuXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmxibFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJhcXVhbWFyaW5lXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uUmFuZ2V7XG4gICAgZnJvbTogbnVtYmVyO1xuICAgIHRvOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSlNBbmltYXRpb25EZWZpbml0aW9uIHtcbiAgICBnZXRSYW5nZTogKCkgPT4gQW5pbWF0aW9uUmFuZ2U7XG4gICAgY3VydmUocHJvZ3Jlc3M6IG51bWJlcik6IG51bWJlcjtcbiAgICBzdGVwKGRlbHRhUmVzdWx0OiBudW1iZXIpOiB2b2lkO1xuICAgIC8vY29uZGl0aW9uOiAoKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50RnJvbVRvKHJhbmdlOiBBbmltYXRpb25SYW5nZSl7XG4gICAgcmV0dXJuICh0OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmFuZ2UuZnJvbSArIHQgKiAocmFuZ2UudG8gLSByYW5nZS5mcm9tKTtcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGUoXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBkZWZzOiBKU0FuaW1hdGlvbkRlZmluaXRpb25bXSkge1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBjb25zdCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGltZVBhc3NlZCA9IG5ldyBEYXRlKCkudmFsdWVPZigpIC0gc3RhcnQudmFsdWVPZigpO1xuXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1lUGFzc2VkIC8gZHVyYXRpb247XG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxKSBwcm9ncmVzcyA9IDE7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZiA9IGRlZnNbaV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGRlZi5jdXJ2ZShwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IGFtb3VudEZyb21UbyhkZWYuZ2V0UmFuZ2UoKSkoZGVsdGEpO1xuICAgICAgICAgICAgICAgIGRlZi5zdGVwKHYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LDE3KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudERhdGEsIFZpZXcgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZW51bXMnO1xuXG5pbXBvcnQgeyBhbmltYXRlLEpTQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9hbmltYXRpb24taGVscGVyc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWFuaW1hdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICdhbmltYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgb25UYXAoYXJnczogRXZlbnREYXRhKXtcblxuICAgICAgICAvL3RoaXMudGVjaDEoYXJncylcbiAgICAgICAgdGhpcy50ZWNoMihhcmdzKVxuXG5cbiAgICB9XG5cbiAgICB0ZWNoMShhcmdzOiBFdmVudERhdGEpe1xuICAgICAgICBjb25zdCB2aWV3ID0gYXJncy5vYmplY3QgYXMgVmlld1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB2aWV3LnBhZ2UuZ2V0Vmlld0J5SWQoJ2xibCcpIGFzIFZpZXdcbiAgICAgICAgLyogTmF0aXZlU2NyaXB0IGFuaW1hdGUgZnVuYy4gdGhpcyBhcGkgaW52b2x2ZXMgc28gbWFueSB0aGluZ3MuICovXG4gICAgICAgIHRhcmdldC5vcmlnaW5ZID0gMFxuICAgICAgICB0YXJnZXQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAvL2JhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwicmVkXCIpLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgIC8vY3VydmUgdXNlcyBBbmltYXRpb25DdXJ2ZSBlbnVtIHlvdSBjYW4gZG8gbGlrZSB0aGlzXG4gICAgICAgICAgICAvL2N1cnZlOiAnc3ByaW5nJ1xuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLnNwcmluZ1xuICAgICAgICAgICAgLy8gb3IgeW91IGNhbiBzZXQgeW91ciBvbncgYW5pbWF0aW9uIGxpa2UgdGhpc1xuICAgICAgICAgICAgLy9jdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoLjE3LC42NywuOTUsLjA3KVxuICAgICAgICAgICAgLy90aGVzZSBudW1iZXJzIGNvbWluZyBmcm9tIGhlcmUgaHR0cHM6Ly9jdWJpYy1iZXppZXIuY29tLyMuMTcsLjY3LC45NSwuMDdcbiAgICAgICAgICAgIC8vdXNpbmcgdGhpcyB3ZWIgc2l0ZSB5b3UgY2FuIHNldCB5b3VyIG93biBhbmltYXRpb24gY3VydmVcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRlY2gyKGFyZ3M6IEV2ZW50RGF0YSl7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdCBhcyBWaWV3XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHZpZXcucGFnZS5nZXRWaWV3QnlJZCgnbGJsJykgYXMgVmlld1xuXG4gICAgICAgIGNvbnN0IGRlZjogSlNBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgZ2V0UmFuZ2U6ICgpID0+IHsgcmV0dXJuIHtmcm9tOiA0MCwgdG86IDQwMH19LFxuICAgICAgICAgICAgY3VydmU6IHQgPT4gdCxcbiAgICAgICAgICAgIHN0ZXA6ICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmhlaWdodCA9IHZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29taW5nIGZyb20gb3VyIGFuaW1hdGlvbi1oZWxwZXJzLnRzXG4gICAgICAgIGFuaW1hdGUoMzAwMCxbZGVmXSlcblxuICAgIH1cbn1cbiIsIjxBY3Rpb25CYXIgdGl0bGU9XCJBbmltYXRpb25cIiBiYWNrZ3JvdW5kQ29sb3I9XCJsaWdodEJsdWVcIj48L0FjdGlvbkJhcj5cbjxTdGFja0xheW91dCBjbGFzcz1cInAtMjBcIj5cbiAgICA8TGFiZWwgdGV4dD1cIlRhcCB0aGUgYnV0dG9uXCIgY2xhc3M9XCJoMSB0ZXh0LWNlbnRlclwiPjwvTGFiZWw+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiVEFQXCIgY2xhc3M9XCItcHJpbWFyeVwiICh0YXApPVwib25UYXAoJGV2ZW50KVwiPjwvQnV0dG9uPlxuICAgIDxMYWJlbCBpZD1cImxibFwiIHRleHQ9XCIgXCIgY2xhc3M9XCJoMiB0ZXh0LWNlbnRlciBsYmxcIj48L0xhYmVsPlxuPC9TdGFja0xheW91dD5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcImFuaW1hdGlvblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImFuaW1hdGlvblwiLCBjb21wb25lbnQ6IEFuaW1hdGlvbkNvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiIsIjxHcmlkTGF5b3V0PlxuICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxuPC9HcmlkTGF5b3V0PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBbmltYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi4vYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEFuaW1hdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==