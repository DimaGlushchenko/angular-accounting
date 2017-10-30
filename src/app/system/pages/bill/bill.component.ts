import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/observable/combineLatest';

import { BillService } from "./../../shared/services/bill.service";
import { Bill } from "../../shared/models/bill.model";

@Component({
  selector: "bill",
  templateUrl: "./bill.component.html",
  styleUrls: ["./bill.component.scss"]
})
export class BillComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private bill: BillService) {}

  ngOnInit() {
    this.subscription = Observable.combineLatest(
      this.bill.getBill(),
      this.bill.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
