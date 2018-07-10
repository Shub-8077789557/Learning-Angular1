import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    customerForm : FormGroup;
    formSubmit : boolean;
  constructor(private fb : FormBuilder) { }

  buildForm(){
    return this.fb.group({
      cardNumber : new FormControl('',[]),
      expiryMonth : new FormControl('',[]),
      expiryYear : new FormControl('',[]),
      cvv : new FormControl('',[])
    })
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      dob : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      mobile : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      address : this.fb.group({
        addressLine1 :  new FormControl('',[]),
        addressLine2 :  new FormControl('',[]),
        city :  new FormControl('',[]),
        state :  new FormControl('',[]),
        pin :  new FormControl('',[]),
        
        
      }),
      cards : this.fb.array([this.buildForm()])
    })
  }

  addCard(){
    const card = this.customerForm.controls['cards'] as FormArray;
    card.push(this.buildForm());
  }
  
  removeCard(i:number){
    const card = this.customerForm.controls['cards'] as FormArray;
    card.removeAt(i);
  }

  addCustomer(){
    console.log(this.customerForm.value);
    this.formSubmit = true;
    this.customerForm.reset();
  }

}
