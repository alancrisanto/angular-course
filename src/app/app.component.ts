import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'basics';
  parentMessage:string = 'Message from parent';
  message!:string;
  fromchildOutputEvent!:string;

  @ViewChild(PostComponent) childComp!:PostComponent;

  constructor (){
    console.log(this.childComp)
  }
  
  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }

  recieveMessage($event:string){
    this.fromchildOutputEvent = $event;
  }
}
