import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
data:any
email:any
pswd:any
loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  ePswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
})
  constructor(private dataService:DataService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.email= this.loginForm.value.email
  this.pswd= this.loginForm.value.ePswd

  const result= this.dataService.login(this.email,this.pswd)
 if(this.loginForm.valid){
  if(result){
    alert("Login succesfully")
    this.router.navigateByUrl('registration-form/home-page')
  }
  
 }
 else{
  alert("Invalid form")
 }
}
}
