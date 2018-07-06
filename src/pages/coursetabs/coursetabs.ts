import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CoursehomePage } from '../coursehome/coursehome';
import { GradesPage } from '../grades/grades';
import { MessagesPage } from '../messages/messages';
import { CategoryPage } from '../category/category';

@Component({
  templateUrl: 'coursetabs.html'
})
export class CourseTabsPage {

  tab1Root = CoursehomePage;
  tab2Root = GradesPage;
  tab3Root = MessagesPage;
  tab4Root = CategoryPage;

  constructor(public viewCtrl: ViewController) {

  }

  getHome(){
    this.viewCtrl.dismiss();
  }
}
