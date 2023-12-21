import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarketplaceItemType } from '../types/Marketplace.type';
@Injectable({
  providedIn: 'root',
})
export class CartService {

  private _cartItems = new BehaviorSubject<
    Array<{ item: MarketplaceItemType; quantity: number }>
  >([]);


  constructor() {}

  getCartIems() {
    return this._cartItems;
  }

  addItem(item: MarketplaceItemType, quantity = 1) {
    const currentCartItem = this._cartItems.getValue();
    const searchItem = currentCartItem.find((i) => i.item.id == item.id);
    if (searchItem) {
      if (quantity > 0) searchItem.quantity += quantity;
      else {
        this.removeItem(item.id);
        return;
      }
    } else currentCartItem.push({ item, quantity });
    this._cartItems.next(currentCartItem);
  }

  removeItem(itemId: number) {
    const currentCartItem = this._cartItems.getValue();
    currentCartItem.splice(
      currentCartItem.findIndex((p) => p.item.id == itemId),
      1
    );
    this._cartItems.next(currentCartItem);
  }

   sum():number{
return 1+1;
  }
}
