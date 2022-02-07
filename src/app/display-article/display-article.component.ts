import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';


@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.scss']
})
export class DisplayArticleComponent implements OnInit {

  articleDATA = {
    title: '',
    description: ''
  }

  constructor(dataService: DataService) {
    this.articleDATA = dataService.articles[0]
  }

  ngOnInit(): void {
  }

}
