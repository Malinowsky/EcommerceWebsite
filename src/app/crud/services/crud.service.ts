import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private httpClient: HttpClient) {}

  loadProducts() {
    const url = environment.API_EndPoint + 'view.php'; // Update property name to API_EndPoint
    return this.httpClient.get(url).pipe(map(data => data));
  }
}