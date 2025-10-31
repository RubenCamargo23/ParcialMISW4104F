import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiculoListComponent],
      providers: [VehiculoService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
  });

  it('should have a table with 3 rows plus header', () => {
    component.vehiculos = [
      new Vehiculo(1, 'Renault', 'Kangoo', 'VU Express', '2017', '93272', 'Blanco', 'https://example.com/image1.jpg'),
      new Vehiculo(2, 'Chevrolet', 'Spark', 'Life', '2018', '55926', 'Plata', 'https://example.com/image2.jpg'),
      new Vehiculo(3, 'Chevrolet', 'Sail', '1.4', '2016', '94321', 'Rojo', 'https://example.com/image3.jpg')
    ];

    fixture.detectChanges();

    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();

    const thead = debug.query(By.css('thead'));
    expect(thead).toBeTruthy();
    const headerRow = thead.query(By.css('tr'));
    expect(headerRow).toBeTruthy();
    const headerCells = headerRow.queryAll(By.css('th'));
    expect(headerCells.length).toBe(4);

    const tbody = debug.query(By.css('tbody'));
    expect(tbody).toBeTruthy();
    const rows = tbody.queryAll(By.css('tr'));
    expect(rows.length).toBe(3);
  });
});
