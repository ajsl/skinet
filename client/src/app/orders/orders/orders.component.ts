import { Component, OnInit } from '@angular/core';
import { IOrder, IOrderItem } from 'src/app/shared/models/orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderItem: IOrderItem[];
  orders: IOrder;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    return this.ordersService.getOrders().subscribe(
      (response) => {
        this.orders = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
