import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:string = 'List of Products';
  messagePost:string = 'MessagePost';
  postMessage:string = "message from post parent new";
  childMessage:string = "Message from child post";
  outputChildMessage:string = 'Message from child component via @output decorator'

  @Input() fromParent:string = '';

  @Output() messageEvent = new EventEmitter<string>();

  constructor () {}

  ngOnInit () : void {

  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }
}
