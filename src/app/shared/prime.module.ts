import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';
import { AvatarModule } from 'primeng/avatar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    SidebarModule,
    DataViewModule,
    AvatarModule,
    InputNumberModule,
    ConfirmPopupModule,
  ],
  exports: [
    ButtonModule,
    DataViewModule,
    SidebarModule,
    AvatarModule,
    InputNumberModule,
    ConfirmPopupModule,
  ],
})
export class PrimeModule {}
