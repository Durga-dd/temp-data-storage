import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'temp-formdata-storage';
  tempform!: FormGroup;
  user_data: any = [];
  getData: any = [];
  isHeaderVisible: boolean = false;
  constructor(private fb: FormBuilder) {
    this.tempform = this.fb.group({
      firstname: [''],
      lastname: [''],
      phone_num: ['', Validators.pattern('^[0-9 ]{10}$')],
    });
  }
  onSubmit() {
    this.user_data.push(this.tempform.value);
    localStorage.setItem('phonebook', JSON.stringify(this.user_data));
    this.getTempData();
  }

  getTempData() {
    let data: any = localStorage.getItem('phonebook');
    this.getData = JSON.parse(data);
    this.isHeaderVisible = this.getData ? true : false;
    console.log(this.getData);
    return this.getData;
  }
}
