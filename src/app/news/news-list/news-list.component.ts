import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  // styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  news$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) => route.route.startsWith(`/news/`))
    ),
    map((dataList) => {
      const sortedList = dataList
        .slice()
        .sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf());
      return sortedList;
    })
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
