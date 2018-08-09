import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result} from '../core/result';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  /**
   * 登陆方法
   * @param {String} username 账户名
   * @param {String} password 密码
   */
  doLogin(username: string, password: string): Observable<Result> {
    const url = 'http://localhost:8080/crm/loginApp';
    return this.httpClient.post<Result>(url, {
      name: username,
      pass: password
    });
  }

}
