import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  articles;

  constructor(dataService : DataService) {
    this.articles = dataService.articles;
  }

  ngOnInit(): void {
  }

}
