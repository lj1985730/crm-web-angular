import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from '../shared-material/shared-material.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingsService } from '../core/settings.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  providers: [
    SettingsService
  ]
})
export class LayoutModule { }
