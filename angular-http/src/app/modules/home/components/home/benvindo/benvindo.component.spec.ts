import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvindoComponent } from './benvindo.component';

describe('BenvindoComponent', () => {
  let component: BenvindoComponent;
  let fixture: ComponentFixture<BenvindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenvindoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenvindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
