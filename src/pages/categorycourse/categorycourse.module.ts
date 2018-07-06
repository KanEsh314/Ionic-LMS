import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryCoursePage } from './categorycourse';

@NgModule({
  declarations: [
    CategoryCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryCoursePage),
  ],
})
export class CategoryPageModule {}