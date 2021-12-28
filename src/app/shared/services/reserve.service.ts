import {Injectable} from '@angular/core';
import {Reserve} from '../model/reserve';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  constructor(private httpClient: HttpClient) {
  }

  URL_RESERVES = 'http://localhost:3000/reserves';
  URL_RESERVES_GET = 'http://localhost:8080/reserves/listReserves';
  URL_RESERVES_POST = 'http://localhost:8080/reserves/insertReserve';
  URL_RESERVES_DELETE = 'http://localhost:8080/reserves/deleteReserve';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  list(): Observable<Reserve[]> {
    return this.httpClient.get<Reserve[]>(`${this.URL_RESERVES_GET}`);
  }

  create(reserve: Reserve): Observable<Reserve> {
    return this.httpClient.post<Reserve>(this.URL_RESERVES_POST, reserve, this.httpOptions);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_RESERVES_DELETE}/${id}`);
  }
}
