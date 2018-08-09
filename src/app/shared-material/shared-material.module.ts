import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatPaginatorModule
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

/**
 * material design 组件统一管理
 */
@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class SharedMaterialModule { }
