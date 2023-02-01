import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductComponent } from './agregar-product.component';

describe('AgregarProductComponent', () => {
  let component: AgregarProductComponent;
  let fixture: ComponentFixture<AgregarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
