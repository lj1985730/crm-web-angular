import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DictComponent } from './dict/dict.component';
import { SelfTenantComponent } from './self-tenant/self-tenant.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedMaterialModule
  ],
  declarations: [HomeComponent, DictComponent, SelfTenantComponent]
})
export class BaseModule { }
