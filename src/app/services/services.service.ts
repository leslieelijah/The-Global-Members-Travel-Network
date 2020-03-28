import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable()
export class ServicesService {
  public baseUrl = 'http://localhost:4000';
  constructor(
    private http: HttpClient
  ) { }

  getSocialising(): Observable<any> {
    const urLink = this.baseUrl + '/social';

    return this.http.get(urLink, httpOptions);
  }

  public getBusiness(): Observable<any> {
    return of(this.baseUrl + '/business');
  }

  public getLocalKnowledge(): Observable<any> {
    return of(this.baseUrl + '/local-knowledge');
  }

}
