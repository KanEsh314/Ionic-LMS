import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, ModalController } from 'ionic-angular';
import { CourseInfoPage } from '../course-info/course-info';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the CourseIntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-intro',
  templateUrl: 'course-intro.html',
})
export class CourseIntroPage {

  module = this.navParams.get('grades');
  //lessons : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public httpService: HttpProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    /*this.httpService.getLessonById().subscribe((data) => {
      this.lessons = data.data;
      //console.log(this.lessons);
    }, (err) => {
      console.log(err);
    });*/
  }

  back(){
  	this.viewCtrl.dismiss();
  }

  getInfo(module){
    this.modalCtrl.create(CourseInfoPage,{module:module}).present();

  	//this.navCtrl.push(CourseInfoPage,{lesson:lesson});
  }

}
