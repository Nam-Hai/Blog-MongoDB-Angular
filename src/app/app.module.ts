import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { DisplayArticleComponent } from './display-article/display-article.component';
import { DataService } from './Service/data.service';
import { ArticleEditViewComponent } from './article-edit-view/article-edit-view.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  { path: '', component: ArticleViewComponent},
  { path: 'edit', component: ArticleEditViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListArticleComponent,
    DisplayArticleComponent,
    ArticleEditViewComponent,
    ArticleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
