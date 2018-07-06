import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the CategoryCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorycourse',
  templateUrl: 'categorycourse.html',
})
export class CategoryCoursePage {

  courses : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl:ViewController, public loadCtrl: LoadingController, public alertCtrl: AlertController, public httpService: HttpProvider) {
  }

  searchItems(ev) {

    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.courses = this.courses.filter((course) => {
        return (course.course_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getRefresh(refresher){
    setTimeout(() => {

     this.ionViewDidLoad();

      refresher.complete();
    },2000);
 }

  ionViewDidLoad() {

    let load = this.loadCtrl.create({
      content: 'Please Wait'
    });
    load.present();

    this.httpService.getCourseByCategory().subscribe((data) => {
    	this.courses = data.data;
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

  getHome(){
    this.viewCtrl.dismiss();
  }

  getInformation(course){
    this.modalCtrl.create(IntroPage,{course: course}).present();
  }
}
