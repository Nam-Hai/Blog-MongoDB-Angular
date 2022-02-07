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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum iure cupiditate nisi distinctio dicta voluptate quasi quas voluptas dolorem!',
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
