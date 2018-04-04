import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CoursehomePage } from '../coursehome/coursehome';
import { GradesPage } from '../grades/grades';
import { MessagesPage } from '../messages/messages';

@Component({
  templateUrl: 'coursetabs.html'
})
export class CourseTabsPage {

  tab1Root = CoursehomePage;
  tab2Root = GradesPage;
  tab3Root = MessagesPage;

  constructor(public viewCtrl: ViewController) {

  }

  getHome(){
    this.viewCtrl.dismiss();
  }
}
