import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { MarketplaceItemType } from '../../types/Marketplace.type';

@Component({
  selector: 'app-product-list-data-view',
  templateUrl: './product-list-data-view.component.html',
  styleUrl: './product-list-data-view.component.css',
})
export class ProductListDataViewComponent {
  cartItems: Array<{ item: MarketplaceItemType; quantity: number }> = [];
  value3 = 0;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartIems().subscribe({
      next: (value) => {
        this.cartItems = value;
      },
    });
  }

  confirmDlete(event: Event, item: MarketplaceItemType) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'voulez-vous vraiment retirer le produit?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.cartService.removeItem(item.id);
        this.productService.markProductAsUnselected(item);
      },
      reject: () => {},
    });
  }
}
