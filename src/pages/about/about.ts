import { Component } from '@angular/core';
import { NavController , ModalController, LoadingController, AlertController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	courses : any;
  items = [];

  constructor(public navCtrl: NavController , public modalCtrl: ModalController, public httpService: HttpProvider, public loadCtrl: LoadingController, public alertCtrl: AlertController) {

  }

  searchItem(ev){

    this.items = this.courses;

    var q = ev.target.value;

    if (!q) {
      return
    }

    this.items = this.items.filter((v) => {
      if (v.course_name && q) {
        if (v.course_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    })

    console.log(q,this.items.length);
  }

  getRefresh(refresher){
     setTimeout(() => {

      this.ionViewDidLoad();

       refresher.complete();
     },2000);
  }

  ionViewDidLoad(){

    let load = this.loadCtrl.create({
      content: 'Please Wait'
    });
    load.present();

  	this.httpService.getCourse().subscribe((data) => {
  		this.courses = data;
      load.dismiss();
  	}, (err) => {
  		  
       load.dismiss();
       this.alertCtrl.create({
         title: 'Internet Connection Error',
         message: 'Please Connect To Working Internet Connection',
         buttons: ['OK']
       }).present();

  	});
  }

  getInformation(course){
    this.modalCtrl.create(IntroPage,{course: course}).present();
  }

}
