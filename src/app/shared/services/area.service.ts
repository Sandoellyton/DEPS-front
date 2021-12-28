import {Injectable} from '@angular/core';
import {Area} from '../model/area';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private httpClient: HttpClient) {
  }

  URL_AREAS = 'http://localhost:3000/areas';
  URL_AREAS_GET = 'http://localhost:8080/areas/listAreas';
  URL_AREAS_POST = 'http://localhost:8080/areas/insertArea';
  URL_AREAS_DELETE = 'http://localhost:8080/areas/deleteArea';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  list(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(`${this.URL_AREAS_GET}`);
  }

  create(area: Area): Observable<Area> {
    return this.httpClient.post<Area>(this.URL_AREAS_POST, area, this.httpOptions);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_AREAS_DELETE}/${id}`);
  }
}
