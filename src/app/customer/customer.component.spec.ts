import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormArray} from '@angular/forms';
import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should add a new card', () => {
    component.addCard();
    fixture.detectChanges();
    const card = component.customerForm.controls['cards'] as FormArray;
      expect(card.length).toBe(1);
   
  });
});
