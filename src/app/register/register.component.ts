import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public alumniForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    interest: new FormControl(''),
    location: new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      address1: new FormControl(''),
      zipCode: new FormControl('')
    }),
    typeOfCommunication: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });

  public interests: Array<any> = ['Socialising', 'Business', 'Local-knowledge'];

  public onRegister() {
    // console.log(this.alumniForm);
    if (this.alumniForm.get('interest').value === 'Socializing') {
      console.log('Socialising');
      console.log(this.alumniForm.value);
    } else if (this.alumniForm.get('interest').value === 'Business') {
      console.log('Business');
      console.log(this.alumniForm.value);
    } else {
      console.log('Local knowledge');
      console.log(this.alumniForm.value);
    }
  }

  ngOnInit(): void {
  }

}
