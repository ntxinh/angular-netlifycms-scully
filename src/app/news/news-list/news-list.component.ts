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
    tap((data) => {
      console.log(data);
    })
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
