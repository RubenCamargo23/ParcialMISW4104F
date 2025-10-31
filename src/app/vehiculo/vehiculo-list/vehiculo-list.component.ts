import { Component } from '@angular/core';
import {Vehiculo} from "../vehiculo";
import {VehiculoService} from "../vehiculo.service";
import {BrandTotal} from "../brandtotal";

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.scss']
})
export class VehiculoListComponent {
  vehiculos: Array<Vehiculo> = [];
  brandTotals: Array<BrandTotal> = [];

  constructor(private vehiculosService: VehiculoService) { }

  getVehiculosList() {
    this.vehiculosService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.calculateBrandTotals();
    });
  }

  calculateBrandTotals() {
    const totalsMap: { [key: string]: number } = {};

    this.vehiculos.forEach(vehiculo => {
      const marca = vehiculo.marca;
      if (totalsMap[marca]) {
        totalsMap[marca]++;
      } else {
        totalsMap[marca] = 1;
      }
    });

    this.brandTotals = Object.keys(totalsMap)
      .sort()
      .map(marca => ({
        marca: marca,
        total: totalsMap[marca]
      }));
  }

  ngOnInit() {
    this.getVehiculosList();
  }
}
