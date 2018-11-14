import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIts: number;
  @Input() created_at: Date
  constructor() {
    this.created_at = new Date();
    this.loveIts = 0;
  }

  ngOnInit() {
  }

  getLove(){
    if(this.loveIts > 0 ){
      return 'loveIt';
    }else if( this.loveIts < 0 ){
      return 'dontLoveIt';
    }else{
      return 'dontknow';
    }
  }

  lovePlus(){
    this.loveIts += 1;
    console.log(this.loveIts);
  }

  loveMoins(){
    this.loveIts -= 1;
    console.log(this.loveIts);
  }
}
