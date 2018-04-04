import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseIntroPage } from './course-intro';

@NgModule({
  declarations: [
    CourseIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseIntroPage),
  ],
})
export class CourseIntroPageModule {}
