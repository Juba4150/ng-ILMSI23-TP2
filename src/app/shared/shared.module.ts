import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime.module';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarCartComponent } from './side-bar-cart/side-bar-cart.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { ProductListDataViewComponent } from './product-list-data-view/product-list-data-view.component';
import { AvatarModule } from 'primeng/avatar';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [SideBarCartComponent, ProductListDataViewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeModule,
  ],
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    SideBarCartComponent,
    ReactiveFormsModule,
    PrimeModule,
  ],
  providers: [ConfirmationService],
})
export class SharedModule {}
