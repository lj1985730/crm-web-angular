import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  public collapsed = false;
  public token;

  constructor() { }

}
