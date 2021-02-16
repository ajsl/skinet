import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder, IOrderItem } from 'src/app/shared/models/orders';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;
  constructor(
    private ordersService: OrdersService,
    private bcService: BreadcrumbService,
    private activatedRoute: ActivatedRoute
  ) {
    this.bcService.set('@orderDetails', ' ');
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    return this.ordersService
      .getOrder(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe((order) => {
        this.order = order;
        this.bcService.set(
          '@orderDetails',
          'Order# ' + order.id + ' - ' + order.status
        );
      });
  }
}
