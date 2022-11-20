import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDonationComponent } from './adding-donation.component';

describe('AddingDonationComponent', () => {
  let component: AddingDonationComponent;
  let fixture: ComponentFixture<AddingDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
