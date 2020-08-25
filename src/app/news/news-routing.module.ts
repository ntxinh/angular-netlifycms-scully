import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news.component';
import {NewsListComponent} from './news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent,
  },
  {
    path: ':slug',
    component: NewsComponent,
  },
  {
    path: '**',
    component: NewsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}

