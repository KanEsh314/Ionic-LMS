import { Component } from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import { BadgePage } from '../badge/badge'; 
import { ScorePage } from '../score/score';
import { TextPage } from '../text/text';
import { ProfilePage } from '../profile/profile';
import { PassPage } from '../pass/pass';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController , public modalCtrl: ModalController) {

  }

  getBadge(){
    this.modalCtrl.create(BadgePage).present();
  }

  getScore(){
    this.modalCtrl.create(ScorePage).present();
  }

  getText(){
    this.modalCtrl.create(TextPage).present();
  }

  getProfile(){
    this.modalCtrl.create(ProfilePage).present();
  }

  getPassword(){
    this.modalCtrl.create(PassPage).present();
  }

}
