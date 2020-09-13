import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProdutoComponent } from './inicio-produto.component';

describe('InicioProdutoComponent', () => {
  let component: InicioProdutoComponent;
  let fixture: ComponentFixture<InicioProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
