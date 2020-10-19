import { Component } from '@angular/core';
import {Courses} from '../db-data'
import { icourse } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

course=Courses;
sdate=new Date(2020,0,1);
num=99.9;
rat=0.78;
tit=Courses[1].title;
  course1=Courses[1];
  // course2=Courses[1];
  // course3=Courses[2];
  // course4=Courses[3];
  OnAppClicked(course:icourse)
  {
    console.log("AppComp Clicked", course);
  }
}
