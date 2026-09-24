import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component';

describe('ProductListCallHttpServiceComponent', () => {
  let component: ProductListCallHttpServiceComponent;
  let fixture: ComponentFixture<ProductListCallHttpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      declarations: [ProductListCallHttpServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListCallHttpServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
