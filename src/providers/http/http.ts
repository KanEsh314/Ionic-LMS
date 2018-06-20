import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    //console.log('Hello HttpProvider Provider');
  }

  getCourse(){
  	return this.http.get("https://agile-oasis-56071.herokuapp.com/api/courses")
  	.map(res => res.json())
  }

  getUser(){
    return this.http.get("http://agile-oasis-56071.herokuapp.com/api/users/51")
    .map(res => res.json())
  }

  getCountry(){
    return this.http.get("https://agile-oasis-56071.herokuapp.com/api/countries")
    .map(res => res.json())
  }

  getCourseById(){
    return this.http.get("https://agile-oasis-56071.herokuapp.com/api/user/51/course")
    .map(res => res.json())
  }

  getModuleByUser(){
    return this.http.get("https://agile-oasis-56071.herokuapp.com/api/user/course/31")  
    .map(res => res.json())
  }

  getLessonById(){
    return this.http.get("https://agile-oasis-56071.herokuapp.com/api/user/course/module/1")
    .map(res => res.json())
  }

  
}
