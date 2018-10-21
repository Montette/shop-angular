import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryOptionsService {

  private deliveryOptions = [
    {
      name: 'Standard delivery',
      price: 5,
      description: 'Standard shipping can take up to 4 days'
    },
    {
      name: 'Express delivery',
      price: 10,
      description: 'The quickest of the normal delivery service, can take up to 2 days'
    },
    {
      name: 'Delivery by drone',
      price: 16,
      description: 'Get your package within an hour and have it flown in by a drone!'
    }
  ];
  constructor() { }

  getDeliveryOptions() {
    return this.deliveryOptions;
  }
}
