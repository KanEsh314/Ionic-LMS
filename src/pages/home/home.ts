import { Component , Input } from '@angular/core';
import { ModalController, LoadingController, AlertController } from 'ionic-angular';
import { CourseTabsPage } from '../coursetabs/coursetabs';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	coursebyids : any;

@Input('progress') progress;

  constructor(public modalCtrl: ModalController, public httpService: HttpProvider, public loadCtrl: LoadingController, public alertCtrl: AlertController) {

  }

  getIntro(){
  	this.modalCtrl.create(CourseTabsPage).present();
  }

  getRefresh(refresher){
     setTimeout(() => {

      this.ionViewDidLoad();

       refresher.complete();
     },2000);
  }

  ionViewDidLoad() {

    let load = this.loadCtrl.create({
      content:'Please Wait'
    });

    load.present();

    this.httpService.getCourseById().subscribe((data) => {
    	this.coursebyids = data.data;
      console.log(data.data);
    	load.dismiss();
    }, (err) => {
    	console.log(err);
      load.dismiss();
      this.alertCtrl.create({
         title: 'Internet Connection Error',
         message: 'Please Connect To Working Internet Connection',
         buttons: ['OK']
       }).present();
    });
  }
}
