import { Routes } from '@angular/router';
import { RoutingComponent } from './components/routing-component/routing-component';
import { Structural } from './Directives/structural/structural';
import { Attribute } from '@angular/core';

export const routes: Routes = [
    {
        path:'component-with-routing',
        component:RoutingComponent
    },
    {
        path:'directive-structural',
        component:Structural
    },
    {
        path:'directive-attribute',
        component:Attribute
    },
];
