import { Component, OnInit } from '@angular/core';
import { EventData, View } from '@nativescript/core';
import { AnimationCurve } from '@nativescript/core/ui/enums';

import { animate,JSAnimationDefinition } from "../animation-helpers";
import { easeCircle } from "d3-ease";

@Component({
    selector: 'ns-animation',
    templateUrl: 'animation.component.html'
})

export class AnimationComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    onTap(args: EventData){

        //this.tech1(args)
        //this.tech2(args)
        this.tech3(args)

    }

    tech1(args: EventData){
        const view = args.object as View
        const target = view.page.getViewById('lbl') as View
        /* NativeScript animate func. this api involves so many things. */
        target.originY = 0
        target.animate({
            //backgroundColor: new Color("red"),
            height: 400,
            duration: 3000,
            //curve uses AnimationCurve enum you can do like this
            //curve: 'spring'
            curve: AnimationCurve.spring
            // or you can set your onw animation like this
            //curve: AnimationCurve.cubicBezier(.17,.67,.95,.07)
            //these numbers coming from here https://cubic-bezier.com/#.17,.67,.95,.07
            //using this web site you can set your own animation curve

        })
    }

    tech2(args: EventData){
        const view = args.object as View
        const target = view.page.getViewById('lbl') as View

        const def: JSAnimationDefinition = {
            getRange: () => { return {from: 40, to: 400}},
            curve: t => t,
            step: (v) => {
                target.height = v
            }
        }

        //coming from our animation-helpers.ts
        animate(3000,[def])
    }

    tech3(args: EventData){
        const view = args.object as View
        const target = view.page.getViewById('lbl') as View

        const def: JSAnimationDefinition = {
            getRange: () => { return {from: 40, to: 400}},
            curve: easeCircle,
            step: (v) => {
                target.height = v
            }
        }

        animate(3000,[def])
    }
}
