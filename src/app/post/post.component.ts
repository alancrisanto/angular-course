import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:String = 'List of Products';
  messagePost:String = 'MessagePost';

  @Input() fromParent:String = '';

  constructor () {}

  ngOnInit () : void {

  }
}
