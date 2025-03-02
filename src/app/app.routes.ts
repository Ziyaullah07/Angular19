import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { Directive } from '@angular/core';
import { DirectiveComponent } from './components/directive/directive.component';
import { UserComponent } from './components/user/user.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path:'directive',
        component:DirectiveComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    },
    {
        path:'Reactive-Form',
        component: ReactiveFormComponent
    },
    {
        path:'customer',
        component: CustomerComponent
    }
];
