import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Tenant} from './Tenant';

@Component({
  selector: 'app-self-tenant',
  templateUrl: './self-tenant.component.html',
  styleUrls: ['./self-tenant.component.scss']
})
export class SelfTenantComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<Tenant>;
  resultsLength = this.dataSource.length;

  constructor() { }

  ngOnInit() {}
}

const TENANT_DATA: Tenant[] = [
  {id: 1, name: '大连用友软件有限公司', shortName: '大连用友'},
  {id: 2, name: '大连市国资委', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];
