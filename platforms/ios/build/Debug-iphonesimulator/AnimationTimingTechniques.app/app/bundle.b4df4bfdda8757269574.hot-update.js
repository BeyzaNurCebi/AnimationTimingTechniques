webpackHotUpdate("bundle",{

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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYW5pbWF0aW9uL2FuaW1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRVc7QUFFUTs7O0FBTzlELE1BQU0sa0JBQWtCO0lBRTNCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVEsS0FBSyxDQUFDO0lBRWQsS0FBSyxDQUFDLElBQWU7UUFFakIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBR3BCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBZTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYztRQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQVM7UUFDbkQsa0VBQWtFO1FBQ2xFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ1gsb0NBQW9DO1lBQ3BDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxxREFBcUQ7WUFDckQsaUJBQWlCO1lBQ2pCLEtBQUssRUFBRSwwRUFBYyxDQUFDLE1BQU07WUFDNUIsOENBQThDO1lBQzlDLG9EQUFvRDtZQUNwRCwwRUFBMEU7WUFDMUUsMERBQTBEO1NBRTdELENBQUM7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWU7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFTO1FBRW5ELE1BQU0sR0FBRyxHQUEwQjtZQUMvQixRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxHQUFDO1lBQzdDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDUixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDckIsQ0FBQztTQUNKO1FBRUQsc0NBQXNDO1FBQ3RDLGtFQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFdkIsQ0FBQzs7b0ZBakRRLGtCQUFrQjtrR0FBbEIsa0JBQWtCO1FDWC9CLDBFQUFxRTtRQUNyRSxpRkFDSTtRQUFBLHNFQUE0RDtRQUM1RCw0RUFBMEQ7UUFBdEIsNElBQU8saUJBQWEsSUFBQztRQUFDLDREQUFTO1FBQ25FLHNFQUE0RDtRQUNoRSw0REFBYzs7NkZETUQsa0JBQWtCO2NBTDlCLHVEQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7YUFDMUMiLCJmaWxlIjoiYnVuZGxlLmI0ZGY0YmZkZGE4NzU3MjY5NTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBWaWV3IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2VudW1zJztcblxuaW1wb3J0IHsgYW5pbWF0ZSxKU0FuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwiLi4vYW5pbWF0aW9uLWhlbHBlcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hbmltYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnYW5pbWF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSl7XG5cbiAgICAgICAgLy90aGlzLnRlY2gxKGFyZ3MpXG4gICAgICAgIHRoaXMudGVjaDIoYXJncylcblxuXG4gICAgfVxuXG4gICAgdGVjaDEoYXJnczogRXZlbnREYXRhKXtcbiAgICAgICAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0IGFzIFZpZXdcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdmlldy5wYWdlLmdldFZpZXdCeUlkKCdsYmwnKSBhcyBWaWV3XG4gICAgICAgIC8qIE5hdGl2ZVNjcmlwdCBhbmltYXRlIGZ1bmMuIHRoaXMgYXBpIGludm9sdmVzIHNvIG1hbnkgdGhpbmdzLiAqL1xuICAgICAgICB0YXJnZXQub3JpZ2luWSA9IDBcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGUoe1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcInJlZFwiKSxcbiAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAvL2N1cnZlIHVzZXMgQW5pbWF0aW9uQ3VydmUgZW51bSB5b3UgY2FuIGRvIGxpa2UgdGhpc1xuICAgICAgICAgICAgLy9jdXJ2ZTogJ3NwcmluZydcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5zcHJpbmdcbiAgICAgICAgICAgIC8vIG9yIHlvdSBjYW4gc2V0IHlvdXIgb253IGFuaW1hdGlvbiBsaWtlIHRoaXNcbiAgICAgICAgICAgIC8vY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKC4xNywuNjcsLjk1LC4wNylcbiAgICAgICAgICAgIC8vdGhlc2UgbnVtYmVycyBjb21pbmcgZnJvbSBoZXJlIGh0dHBzOi8vY3ViaWMtYmV6aWVyLmNvbS8jLjE3LC42NywuOTUsLjA3XG4gICAgICAgICAgICAvL3VzaW5nIHRoaXMgd2ViIHNpdGUgeW91IGNhbiBzZXQgeW91ciBvd24gYW5pbWF0aW9uIGN1cnZlXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0ZWNoMihhcmdzOiBFdmVudERhdGEpe1xuICAgICAgICBjb25zdCB2aWV3ID0gYXJncy5vYmplY3QgYXMgVmlld1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB2aWV3LnBhZ2UuZ2V0Vmlld0J5SWQoJ2xibCcpIGFzIFZpZXdcblxuICAgICAgICBjb25zdCBkZWY6IEpTQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIGdldFJhbmdlOiAoKSA9PiB7IHJldHVybiB7ZnJvbTogNDAsIHRvOiA0MDB9fSxcbiAgICAgICAgICAgIGN1cnZlOiB0ID0+IHQsXG4gICAgICAgICAgICBzdGVwOiAodikgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldC5oZWlnaHQgPSB2XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbWluZyBmcm9tIG91ciBhbmltYXRpb24taGVscGVycy50c1xuICAgICAgICBhbmltYXRlKDMwMDAsW2RlZl0pXG5cbiAgICB9XG59XG4iLCI8QWN0aW9uQmFyIHRpdGxlPVwiQW5pbWF0aW9uXCIgYmFja2dyb3VuZENvbG9yPVwibGlnaHRCbHVlXCI+PC9BY3Rpb25CYXI+XG48U3RhY2tMYXlvdXQgY2xhc3M9XCJwLTIwXCI+XG4gICAgPExhYmVsIHRleHQ9XCJUYXAgdGhlIGJ1dHRvblwiIGNsYXNzPVwiaDEgdGV4dC1jZW50ZXJcIj48L0xhYmVsPlxuICAgIDxCdXR0b24gdGV4dD1cIlRBUFwiIGNsYXNzPVwiLXByaW1hcnlcIiAodGFwKT1cIm9uVGFwKCRldmVudClcIj48L0J1dHRvbj5cbiAgICA8TGFiZWwgaWQ9XCJsYmxcIiB0ZXh0PVwiIFwiIGNsYXNzPVwiaDIgdGV4dC1jZW50ZXIgbGJsXCI+PC9MYWJlbD5cbjwvU3RhY2tMYXlvdXQ+XG4iXSwic291cmNlUm9vdCI6IiJ9