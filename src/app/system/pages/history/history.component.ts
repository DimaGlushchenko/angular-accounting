import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "./../../shared/services/categories.service";
import { EventsService } from "./../../shared/services/event.service";

import { Category } from "../../shared/models/category.model";
import { WFMEvent } from "./../../shared/models/event.model";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private eventService: EventsService
  ) {}

  isLoaded = false;
  s1: Subscription;

  categories: Category[] = [];
  events: WFMEvent[] = [];

  chartData = [];

  ngOnInit() {
    this.s1 = Observable.combineLatest(
      this.categoriesService.getCategories(),
      this.eventService.getEvents()
    ).subscribe((data: [Category[], WFMEvent[]]) => {
      this.categories = data[0];
      this.events = data[1];

      this.calculateChartData();

      this.isLoaded = true;
    });
  }

  calculateChartData(): void {
    this.chartData = [];

    this.categories.forEach(cat => {
      const catEvent = this.events.filter(
        e => e.category === cat.id && e.type === "outcome"
      );
      this.chartData.push({
        name: cat.name,
        value: catEvent.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
  }

  ngOnDestroy() {
    if (this.s1) {
      this.s1.unsubscribe();
    }
  }
}
