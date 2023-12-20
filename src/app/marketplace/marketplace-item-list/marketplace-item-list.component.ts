import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { MarketplaceItemType } from '../../types/Marketplace.type';

@Component({
  selector: 'app-marketplace-item-list',
  templateUrl: './marketplace-item-list.component.html',
  styleUrl: './marketplace-item-list.component.css',
})
export class MarketplaceItemListComponent {
  constructor(
    public productService: ProductService,
    private cartService: CartService
  ) {}

  addProduct(item: MarketplaceItemType) {
    this.productService.markProductAsSelected(item);
    this.cartService.addItem(item);
  }

  removeProduct(item: MarketplaceItemType) {
    this.productService.markProductAsUnselected(item);

    this.cartService.removeItem(item.id);
  }
}
