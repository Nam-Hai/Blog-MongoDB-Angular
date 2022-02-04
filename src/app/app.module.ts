import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { DisplayArticleComponent } from './display-article/display-article.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListArticleComponent,
    DisplayArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
