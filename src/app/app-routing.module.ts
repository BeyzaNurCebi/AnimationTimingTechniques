import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AnimationComponent } from "./animation/animation.component";


const routes: Routes = [
    { path: "", redirectTo: "animation", pathMatch: "full" },
    { path: "animation", component: AnimationComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
