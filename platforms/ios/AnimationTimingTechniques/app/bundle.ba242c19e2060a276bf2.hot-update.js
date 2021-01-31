webpackHotUpdate("bundle",{

/***/ "./app/animation/animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_core_ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/index.js");
/* harmony import */ var _animation_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/animation-helpers.ts");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/d3-ease/src/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");






class AnimationComponent {
    constructor() { }
    ngOnInit() { }
    onTap(args) {
        //this.tech1(args)
        //this.tech2(args)
        this.tech3(args);
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
    tech3(args) {
        const view = args.object;
        const target = view.page.getViewById('lbl');
        const def = {
            getRange: () => { return { from: 40, to: 400 }; },
            curve: d3_ease__WEBPACK_IMPORTED_MODULE_3__["easeCircle"],
            step: (v) => {
                target.height = v;
            }
        };
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
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["ActionBarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-animation',
                templateUrl: 'animation.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYW5pbWF0aW9uL2FuaW1hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFFVztBQUVRO0FBQ2hDOzs7QUFPOUIsTUFBTSxrQkFBa0I7SUFFM0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUSxLQUFLLENBQUM7SUFFZCxLQUFLLENBQUMsSUFBZTtRQUVqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRXBCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBZTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYztRQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQVM7UUFDbkQsa0VBQWtFO1FBQ2xFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ1gsb0NBQW9DO1lBQ3BDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxxREFBcUQ7WUFDckQsaUJBQWlCO1lBQ2pCLEtBQUssRUFBRSwwRUFBYyxDQUFDLE1BQU07WUFDNUIsOENBQThDO1lBQzlDLG9EQUFvRDtZQUNwRCwwRUFBMEU7WUFDMUUsMERBQTBEO1NBRTdELENBQUM7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWU7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFTO1FBRW5ELE1BQU0sR0FBRyxHQUEwQjtZQUMvQixRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxHQUFDO1lBQzdDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDUixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDckIsQ0FBQztTQUNKO1FBRUQsc0NBQXNDO1FBQ3RDLGtFQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFlO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBUztRQUVuRCxNQUFNLEdBQUcsR0FBMEI7WUFDL0IsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUMsR0FBQztZQUM3QyxLQUFLLEVBQUUsa0RBQVU7WUFDakIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3JCLENBQUM7U0FDSjtRQUVELGtFQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7b0ZBL0RRLGtCQUFrQjtrR0FBbEIsa0JBQWtCO1FDWi9CLDBFQUFxRTtRQUNyRSxpRkFDSTtRQUFBLHNFQUE0RDtRQUM1RCw0RUFBMEQ7UUFBdEIsNElBQU8saUJBQWEsSUFBQztRQUFDLDREQUFTO1FBQ25FLHNFQUE0RDtRQUNoRSw0REFBYzs7NkZET0Qsa0JBQWtCO2NBTDlCLHVEQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7YUFDMUMiLCJmaWxlIjoiYnVuZGxlLmJhMjQyYzE5ZTIwNjBhMjc2YmYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBWaWV3IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2VudW1zJztcblxuaW1wb3J0IHsgYW5pbWF0ZSxKU0FuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwiLi4vYW5pbWF0aW9uLWhlbHBlcnNcIjtcbmltcG9ydCB7IGVhc2VDaXJjbGUgfSBmcm9tIFwiZDMtZWFzZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWFuaW1hdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICdhbmltYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgb25UYXAoYXJnczogRXZlbnREYXRhKXtcblxuICAgICAgICAvL3RoaXMudGVjaDEoYXJncylcbiAgICAgICAgLy90aGlzLnRlY2gyKGFyZ3MpXG4gICAgICAgIHRoaXMudGVjaDMoYXJncylcblxuICAgIH1cblxuICAgIHRlY2gxKGFyZ3M6IEV2ZW50RGF0YSl7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdCBhcyBWaWV3XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHZpZXcucGFnZS5nZXRWaWV3QnlJZCgnbGJsJykgYXMgVmlld1xuICAgICAgICAvKiBOYXRpdmVTY3JpcHQgYW5pbWF0ZSBmdW5jLiB0aGlzIGFwaSBpbnZvbHZlcyBzbyBtYW55IHRoaW5ncy4gKi9cbiAgICAgICAgdGFyZ2V0Lm9yaWdpblkgPSAwXG4gICAgICAgIHRhcmdldC5hbmltYXRlKHtcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJyZWRcIiksXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgLy9jdXJ2ZSB1c2VzIEFuaW1hdGlvbkN1cnZlIGVudW0geW91IGNhbiBkbyBsaWtlIHRoaXNcbiAgICAgICAgICAgIC8vY3VydmU6ICdzcHJpbmcnXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuc3ByaW5nXG4gICAgICAgICAgICAvLyBvciB5b3UgY2FuIHNldCB5b3VyIG9udyBhbmltYXRpb24gbGlrZSB0aGlzXG4gICAgICAgICAgICAvL2N1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllciguMTcsLjY3LC45NSwuMDcpXG4gICAgICAgICAgICAvL3RoZXNlIG51bWJlcnMgY29taW5nIGZyb20gaGVyZSBodHRwczovL2N1YmljLWJlemllci5jb20vIy4xNywuNjcsLjk1LC4wN1xuICAgICAgICAgICAgLy91c2luZyB0aGlzIHdlYiBzaXRlIHlvdSBjYW4gc2V0IHlvdXIgb3duIGFuaW1hdGlvbiBjdXJ2ZVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGVjaDIoYXJnczogRXZlbnREYXRhKXtcbiAgICAgICAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0IGFzIFZpZXdcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdmlldy5wYWdlLmdldFZpZXdCeUlkKCdsYmwnKSBhcyBWaWV3XG5cbiAgICAgICAgY29uc3QgZGVmOiBKU0FuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICBnZXRSYW5nZTogKCkgPT4geyByZXR1cm4ge2Zyb206IDQwLCB0bzogNDAwfX0sXG4gICAgICAgICAgICBjdXJ2ZTogdCA9PiB0LFxuICAgICAgICAgICAgc3RlcDogKHYpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gdlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21pbmcgZnJvbSBvdXIgYW5pbWF0aW9uLWhlbHBlcnMudHNcbiAgICAgICAgYW5pbWF0ZSgzMDAwLFtkZWZdKVxuICAgIH1cblxuICAgIHRlY2gzKGFyZ3M6IEV2ZW50RGF0YSl7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdCBhcyBWaWV3XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHZpZXcucGFnZS5nZXRWaWV3QnlJZCgnbGJsJykgYXMgVmlld1xuXG4gICAgICAgIGNvbnN0IGRlZjogSlNBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgZ2V0UmFuZ2U6ICgpID0+IHsgcmV0dXJuIHtmcm9tOiA0MCwgdG86IDQwMH19LFxuICAgICAgICAgICAgY3VydmU6IGVhc2VDaXJjbGUsXG4gICAgICAgICAgICBzdGVwOiAodikgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldC5oZWlnaHQgPSB2XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKDMwMDAsW2RlZl0pXG4gICAgfVxufVxuIiwiPEFjdGlvbkJhciB0aXRsZT1cIkFuaW1hdGlvblwiIGJhY2tncm91bmRDb2xvcj1cImxpZ2h0Qmx1ZVwiPjwvQWN0aW9uQmFyPlxuPFN0YWNrTGF5b3V0IGNsYXNzPVwicC0yMFwiPlxuICAgIDxMYWJlbCB0ZXh0PVwiVGFwIHRoZSBidXR0b25cIiBjbGFzcz1cImgxIHRleHQtY2VudGVyXCI+PC9MYWJlbD5cbiAgICA8QnV0dG9uIHRleHQ9XCJUQVBcIiBjbGFzcz1cIi1wcmltYXJ5XCIgKHRhcCk9XCJvblRhcCgkZXZlbnQpXCI+PC9CdXR0b24+XG4gICAgPExhYmVsIGlkPVwibGJsXCIgdGV4dD1cIiBcIiBjbGFzcz1cImgyIHRleHQtY2VudGVyIGxibFwiPjwvTGFiZWw+XG48L1N0YWNrTGF5b3V0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==