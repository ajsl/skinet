import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder, IOrderItem } from '../shared/models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder> {
    return this.http.get<IOrder>(this.baseUrl + 'orders');
  }

  getOrder(id: number): Observable<IOrder> {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }
}
