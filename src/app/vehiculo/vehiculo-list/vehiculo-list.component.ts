import { Component } from '@angular/core';
import {Vehiculo} from "../vehiculo";
import {VehiculoService} from "../vehiculo.service";

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.scss']
})
export class VehiculoListComponent {
  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculosService: VehiculoService) { }

  getVehiculosList() {
    this.vehiculosService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getVehiculosList();
  }
}
