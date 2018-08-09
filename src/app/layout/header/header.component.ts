import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../core/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private settings: SettingsService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.settings.collapsed = !this.settings.collapsed;
  }
}
