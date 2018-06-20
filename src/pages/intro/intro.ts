import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, ModalController} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { EnrollPage } from '../enroll/enroll';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  intros = this.navParams.get('course'); ;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public httpService: HttpProvider) {
    
  }

  ionViewDidLoad() {
    console.log(this.intros.course_name);
  }

  getHome(){
    this.viewCtrl.dismiss();
  }

  getEnroll(enroll){
    this.modalCtrl.create(EnrollPage,{enroll: enroll}).present();
  }

}
