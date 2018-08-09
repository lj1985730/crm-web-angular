import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../core/settings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private settings: SettingsService) { }

  ngOnInit() {
  }

}
