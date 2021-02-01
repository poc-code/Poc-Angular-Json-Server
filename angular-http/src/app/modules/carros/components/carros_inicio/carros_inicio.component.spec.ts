import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosInicioComponent } from './carros_inicio.component';

describe('InicioComponent', () => {
  let component: CarrosInicioComponent;
  let fixture: ComponentFixture<CarrosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
