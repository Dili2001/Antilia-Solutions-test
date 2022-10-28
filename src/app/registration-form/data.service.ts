import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  email: any
  pswd: any
  null: any
  database: any = {

  }

  constructor() {
    if(localStorage.getItem('database')){
      this.getDetails()
    }
    else{
      this.saveDetails()
    }
  }

  getDetails() {
    
    this.database = JSON.parse(localStorage.getItem('database') || '')
  }

  saveDetails() {
    localStorage.setItem('database', JSON.stringify(this.database))
  }


  register(email: any, pswd: any) {
    let database = this.database
    if (email in database) {
      return false
    }
    else {
      database[email] = {
        email,
        pswd
      }
      this.saveDetails()
      return true
    }
  }

  login(email: any, pswd: any) {
    let userDetails = this.database
    if (email in userDetails) {
      if (pswd == userDetails[email]['pswd']) {
        return true
      }
      else {
        alert('Incorrect Password')
        return false
      }
    }
    else {
      alert("User does not exists")
      return false
    }
  }
}
