import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

	public token : any;

  constructor(public http: Http, public storage: Storage) {
    //console.log('Hello AuthProvider Provider');
  }

  createAccount(details){
   
  	return new Promise((resolve, reject) => {

  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	this.http.post('https://agile-oasis-56071.herokuapp.com/api/register', JSON.stringify(details), {headers: headers})
  	.subscribe(res => {

  		let data = res.json();
  		this.token = data.token;
  		this.storage.set('token',data.token);
  		resolve(data);
  	
  	}, (err) => {
  		reject(err);
  	});
  });
}

  checkAuthentication(){

    return new Promise((resolve,reject) => {

      this.storage.get('token').then((value) => {

        this.token = value;

        let headers = new Headers();
        headers.append('Authorization',this.token);

        this.http.get('http://agile-oasis-56071.herokuapp.com/api/users/51', {headers: headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
    });
  }

  getUserUpdate(userinfo){
    
    return new Promise((resolve,reject) => {

      let headers = new Headers();
      headers.append('Content-Type' , 'application/json')

      this.http.post('https://agile-oasis-56071.herokuapp.com/api/edit_user/51',JSON.stringify(userinfo),{headers: headers})
      .subscribe(res => {

        let _data = res.json();
        this.token = _data.token;
        this.storage.set('token',_data.token);
        resolve(_data);
      }, (err) => {
        reject(err);
      });
    });
  }

}
