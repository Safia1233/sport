import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any =[];
  a:any={};
  constructor() { }

  ngOnInit(): void {
    this.articles=[
      {id:"1",title:"Title1",date:"12-10-2023",desc:"Description 1"},
      {id:"2",title:"Title2",date:"12-10-2023",desc:"Description 2"}

    ]

  }

}
