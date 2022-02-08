import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';


@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.scss']
})
export class DisplayArticleComponent implements OnInit {

  articleDATA = {
      title: 'article 1',
      createdAt: Date(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum iure cupiditate nisi distinctio dicta voluptate quasi quas voluptas dolorem!',
      content: 'content 1'
    }

  constructor(dataService: DataService) {
    this.articleDATA = dataService.articles[0]
  }

  ngOnInit(): void {
  }

}
