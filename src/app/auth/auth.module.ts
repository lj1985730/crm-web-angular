import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { LoginComponent } from './login/login.component';
import { Code404Component } from './code404/code404.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedMaterialModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent,
    Code404Component
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
