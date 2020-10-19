import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icourse } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

@Input()
course : icourse;
@Input()
indx:number;

@Output()
onCourseclick=new EventEmitter<icourse>();

  constructor() { }

  ngOnInit(): void {
  }

  onCoursecompclick()
  {
    alert(1);
    this.onCourseclick.emit(this.course);
  }
  cardclass()
  {
  //   return{
  //     'beginner':this.course.type == 'beginner'
  //   };
    if(this.course.type == 'beginner')
    {
    return('beginner');
    }
  }
  cardStyles()
  {
   return {'text-decoration':'underline'}
  }
}
