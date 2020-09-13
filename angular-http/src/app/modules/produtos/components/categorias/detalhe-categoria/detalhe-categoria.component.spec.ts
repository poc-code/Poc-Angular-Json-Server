import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCategoriaComponent } from './detalhe-categoria.component';

describe('DetalheCategoriaComponent', () => {
  let component: DetalheCategoriaComponent;
  let fixture: ComponentFixture<DetalheCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
