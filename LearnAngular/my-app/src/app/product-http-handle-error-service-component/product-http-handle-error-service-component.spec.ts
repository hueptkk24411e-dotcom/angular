import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductHttpHandleErrorService } from '../product-http-handle-error-service';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component';

describe('ProductHttpHandleErrorServiceComponent', () => {
  let component: ProductHttpHandleErrorServiceComponent;
  let fixture: ComponentFixture<ProductHttpHandleErrorServiceComponent>;

  beforeEach(async () => {
    const service = {
      getProductList: () => of([]),
      getErrorMessage: () => '',
    };

    await TestBed.configureTestingModule({
      declarations: [ProductHttpHandleErrorServiceComponent],
      providers: [{ provide: ProductHttpHandleErrorService, useValue: service }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHttpHandleErrorServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
