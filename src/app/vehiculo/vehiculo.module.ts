import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from "./vehiculo-list/vehiculo-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    VehiculoListComponent
  ],
  exports: [
    VehiculoListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class VehiculoModule { }
