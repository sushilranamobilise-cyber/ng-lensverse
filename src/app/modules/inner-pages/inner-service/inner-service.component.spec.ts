import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerServiceComponent } from './inner-service.component';

describe('InnerServiceComponent', () => {
  let component: InnerServiceComponent;
  let fixture: ComponentFixture<InnerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
