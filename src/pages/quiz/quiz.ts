import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  @ViewChild('slides') slides: any;
  
  slideOption: any;
  flashCardFlipped: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  
  }

  ionViewDidLoad() {

  }

  selectAnswer(){
  	this.flashCardFlipped = true;
    

    this.alertCtrl.create({
      title: 'Exam Completed',
      message: 'Your Score is 80%',
      buttons: [
      {
        text:'OK',
        handler: data => {
          this.navCtrl.pop();
        }
      }]
    }).present();
  }

  getBack(){
    this.viewCtrl.dismiss();
  }

}
