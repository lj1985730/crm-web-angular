import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthService} from '../auth.service';
import {SettingsService} from '../../core/settings.service';
import {Router} from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  account: string;
  password: string;
  resMessage: string;
  matcher = new MyErrorStateMatcher();
  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private authService: AuthService, public settings: SettingsService, private router: Router) { }

  ngOnInit() {
    document.body.style.backgroundImage = 'url("/assets/login/bg.jpg")';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
  }

  ngOnDestroy() {
    document.body.style.background = null;
  }

  /**
   * 登陆动作
   */
  doLogin() {
    if (!this.account || !this.password) {
      this.resMessage = '登陆账户或密码不可为空！';
    }
    this.authService.doLogin(this.account, this.password).subscribe(
      data => {
        if (data.success) {
          this.settings.token = data.data;
          this.router.navigateByUrl('home').catch((error) => console.error(error));
        }
        this.resMessage = data.message;
      },
      (error) => {
        this.resMessage = error;
      }
    );
  }
}
