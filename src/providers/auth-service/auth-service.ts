
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {

  constructor() {
    console.log('Hello AuthServiceProvider Provider');
  }
  currentUser: User;
  
   public login(credentials) {
     if (credentials.email === null || credentials.password === null) {
       return Observable.throw("Por favor preencha tudo!");
     } else {
       return Observable.create(observer => {
         // At this point make a request to your backend to make a real check!
         let access = (credentials.password === "pass" && credentials.email === "email");
         this.currentUser = new User('elnatan', 'elnatan@unifacisa.com');
         observer.next(access);
         observer.complete();
       });
     }
   }
  
   public register(credentials) {
     if (credentials.email === null || credentials.password === null) {
       return Observable.throw("Please insert credentials");
     } else {
       // At this point store the credentials to your backend!
       return Observable.create(observer => {
         observer.next(true);
         observer.complete();
       });
     }
   }
  
   public getUserInfo() : User {
     return this.currentUser;
   }
  
   public logout() {
     return Observable.create(observer => {
       this.currentUser = null;
       observer.next(true);
       observer.complete();
     });
   }

}
