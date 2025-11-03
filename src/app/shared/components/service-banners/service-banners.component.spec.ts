import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBannersComponent } from './service-banners.component';

describe('ServiceBannersComponent', () => {
  let component: ServiceBannersComponent;
  let fixture: ComponentFixture<ServiceBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBannersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
