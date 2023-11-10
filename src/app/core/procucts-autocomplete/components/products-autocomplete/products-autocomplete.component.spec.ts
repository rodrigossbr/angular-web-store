import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAutocompleteComponent } from './products-autocomplete.component';

describe('ProductsAutocompleteComponent', () => {
  let component: ProductsAutocompleteComponent;
  let fixture: ComponentFixture<ProductsAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAutocompleteComponent]
    });
    fixture = TestBed.createComponent(ProductsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
