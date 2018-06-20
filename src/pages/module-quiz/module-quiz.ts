import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';

/**
 * Generated class for the ModuleQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-module-quiz',
  templateUrl: 'module-quiz.html',
})
export class ModuleQuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  back(){
  	this.viewCtrl.dismiss();
  }

  startQuiz(){
  	this.modalCtrl.create(QuizPage).present();
  }

}
