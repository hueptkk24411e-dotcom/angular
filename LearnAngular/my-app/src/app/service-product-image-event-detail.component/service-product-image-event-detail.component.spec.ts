import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail.component';

describe('ServiceProductImageEventDetailComponent', () => {
  let component: ServiceProductImageEventDetailComponent;
  let fixture: ComponentFixture<ServiceProductImageEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEventDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => (key === 'id' ? '1' : null) }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
