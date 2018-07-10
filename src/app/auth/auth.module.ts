import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedMaterialModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
