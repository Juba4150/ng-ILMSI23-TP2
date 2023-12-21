import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MarketplaceItemType } from '../../types/Marketplace.type';

@Component({
  selector: 'app-side-bar-cart',
  templateUrl: './side-bar-cart.component.html',
  styleUrl: './side-bar-cart.component.css',
})
export class SideBarCartComponent {
  @Input({ required: true })
  sidebarVisible!: boolean;

  @Output()
  sidebarVisibleChange = new EventEmitter<boolean>();

  onSideBarClosed() {
    this.sidebarVisibleChange.emit(false);
  }
}
