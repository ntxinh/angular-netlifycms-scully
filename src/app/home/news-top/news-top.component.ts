import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-news-top',
  templateUrl: './news-top.component.html',
  // styleUrls: ['./news-top.component.scss'],
})
export class NewsTopComponent implements OnInit {
  news$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) => route.route.startsWith(`/news/`))
    ),
    map((dataList) => {
      const sortedList = dataList
        .slice()
        .sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())
        .slice(0, 3);
      return sortedList;
    })
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
