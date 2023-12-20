import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { MarketplaceItemType } from '../types/Marketplace.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: MarketplaceItemType[] = [
    {
      id: 1,
      title: 'Air Jordan 1 Mid',
      categorty: 'Sneackers',
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/air-jordan-1-mid-shoes-7wnzmw.png',
      description:
        'This offering of the Air Jordan 1 Mid comes constructed in a leather build featuring a White base with Tan overlays,',
      price: 179,
      isSelected: false,
    },
    {
      id: 2,
      title: 'Air Jordan 1 Mid Grey Fog/Black-White ',
      categorty: 'Sneackers',
      image:
        'https://media.stylerunner.com/cdn-cgi/image/fit=cover,q=90,f=jpeg,w=1000,h=1500/products/c5a44eb9/bq6472-015-phslh001-2000psd0.jpg',
      description:
        'This offering of the Air Jordan 1 Mid comes constructed in a leather build featuring a White base with Tan overlays,',
      price: 299,
      isSelected: false,
    },
    {
      id: 3,
      title: 'Jordan 1 Mid University',
      categorty: 'Sneackers',
      image:
        'https://dropoutmilano.com/cdn/shop/files/jordan-1-mid-university-blue-grey-dropout_700x700.png?v=1699879475',
      description:
        'Air Jordan continues to provide new twists on its beloved University Blue colorway, and this latest iteration is no different. Released in August.',
      price: 24.99,
      isSelected: false,
    },
  ];

  constructor() {}

  getProducts(): Observable<MarketplaceItemType[]> {
    return of(this._products);
  }

  markProductAsSelected(item: MarketplaceItemType) {
    item.isSelected = true;
  }

  markProductAsUnselected(item: MarketplaceItemType) {
    item.isSelected = false;
  }
}
