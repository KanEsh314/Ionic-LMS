import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController , ViewController, LoadingController, AlertController} from 'ionic-angular';
import { CourseIntroPage } from '../course-intro/course-intro';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the CoursehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursehome',
  templateUrl: 'coursehome.html',
})
export class CoursehomePage {

	modules : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl:ViewController, public httpService: HttpProvider, public alertCtrl: AlertController, public loadCtrl: LoadingController) {
  
  }

  ionViewDidLoad() {

    let load = this.loadCtrl.create({
      content: 'Please Wait'
    });
    load.present();

    this.httpService.getModuleByUser().subscribe((data) => {
    	this.modules = data.data;
    	console.log(this.modules);
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

  getCourseIntro(module){
  	this.modalCtrl.create(CourseIntroPage,{ module:module}).present();
  }
  
}
