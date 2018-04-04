import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursehomePage } from './coursehome';

@NgModule({
  declarations: [
    CoursehomePage,
  ],
  imports: [
    IonicPageModule.forChild(CoursehomePage),
  ],
})
export class CoursehomePageModule {}
