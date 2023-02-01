import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantiProductComponent } from './canti-product.component';

describe('CantiProductComponent', () => {
  let component: CantiProductComponent;
  let fixture: ComponentFixture<CantiProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantiProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
