import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  articles = [
    {
      title: 'article 1',
      createdAt: Date(),
      description: 'descrition 1',
      content: 'content 1'
    },
    {
      title: 'article 2',
      createdAt: Date(),
      description: 'descrition 2',
      content: 'content 2'
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
