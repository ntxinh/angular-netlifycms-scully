import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {NewsRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, ScullyLibModule],
})
export class NewsModule {}
