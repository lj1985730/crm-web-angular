import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { Code404Component } from '../auth/code404/code404.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { HomeComponent } from '../base/home/home.component';
import { DictComponent } from '../base/dict/dict.component';
import { SelfTenantComponent } from '../base/self-tenant/self-tenant.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent, children : [
    { path : 'home', component: HomeComponent },
    { path : 'base/self-tenant', component: SelfTenantComponent },
    { path : 'base/dict', component: DictComponent }
  ]},
  { path: '**', component : Code404Component} // 404通配符
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
