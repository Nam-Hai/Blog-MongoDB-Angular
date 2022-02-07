import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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
}
