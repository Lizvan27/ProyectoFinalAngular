import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselProductComponent } from './carrusel-product.component';

describe('CarruselProductComponent', () => {
  let component: CarruselProductComponent;
  let fixture: ComponentFixture<CarruselProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
