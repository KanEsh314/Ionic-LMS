var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CoursehomePage } from '../coursehome/coursehome';
import { GradesPage } from '../grades/grades';
import { MessagesPage } from '../messages/messages';
var CourseTabsPage = (function () {
    function CourseTabsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.tab1Root = CoursehomePage;
        this.tab2Root = GradesPage;
        this.tab3Root = MessagesPage;
    }
    CourseTabsPage.prototype.getHome = function () {
        this.viewCtrl.dismiss();
    };
    return CourseTabsPage;
}());
CourseTabsPage = __decorate([
    Component({
        templateUrl: 'coursetabs.html'
    }),
    __metadata("design:paramtypes", [ViewController])
], CourseTabsPage);
export { CourseTabsPage };
//# sourceMappingURL=coursetabs.js.map