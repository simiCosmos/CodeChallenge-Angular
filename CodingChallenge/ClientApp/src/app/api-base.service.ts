import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  /**
   * Creates an instance of ApiBaseService.
   * @param {HttpClient} http
   * @param {EncyptionService} encryptionService
   * @memberof ApiBaseService
   */
  constructor(private http: HttpClient) {}

  /**
   *
   *
   * @param {string} path
   * @param {HttpParams} [params=new HttpParams()]
   * @returns {Observable<any>}
   * @memberof ApiBaseService
   */
  get(
    path: string,
    params: HttpParams = new HttpParams(),
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
    // disables the cache for IE.
    if (isIE) {
      headers = headers.append('Cache-Control', 'no-cache');
      headers = headers.append('Pragma', 'no-cache');
      headers = headers.append('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
      headers = headers.append('If-Modified-Since', '0');
    }

    return this.http.get(`${environment.baseUrl}${path}`, { headers, params });
  }
  /**
   *
   *
   * @param {string} path
   * @param {*} [body={}]
   * @returns {Observable<any>}
   * @memberof ApiBaseService
   */
  put(path: string, body: any = {}): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.put(`${environment.baseUrl}${path}`, body, { headers });
  }
  /**
   *
   *
   * @param {string} path
   * @param {*} [body={}]
   * @returns {Observable<any>}
   * @memberof ApiBaseService
   */
  post(
    path: string,
    body: any = {},
    headers: HttpHeaders = null
  ): Observable<any> {
    if (headers == null) {
      headers = new HttpHeaders();
    }
    headers.set('content-type', 'application/json');
    return this.http.post<any>(`${environment.baseUrl}${path}`, body, {
      headers,
    });
  }
  /**
   *
   *
   * @param {*} path
   * @returns {Observable<any>}
   * @memberof ApiBaseService
   */
  delete(path): Observable<any> {
    return this.http.delete(`${environment.baseUrl}${path}`);
  }
}