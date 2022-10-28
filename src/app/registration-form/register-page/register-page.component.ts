import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  email: any
  pswd: any
  name:any
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    ePswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/(.+)?')]],
    fname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    cmpnyname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    mobNo: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  register() {
    
    this.email = this.registerForm.value.email
    this.pswd = this.registerForm.value.ePswd

    const result = this.dataService.register(this.email, this.pswd)
    if (this.registerForm.valid) {
      if(result){
      alert('Registered successfully !!')
      this.router.navigateByUrl('registration-form/login-page')

    }
    else{
      alert("User already exists.Please Log in !!")
    }
  }
  else {
    alert('Invalid Form.Please enter correct Details !!')
  }
  }
}
