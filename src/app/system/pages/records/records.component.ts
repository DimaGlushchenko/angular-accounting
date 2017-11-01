import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newCategoryAdded(category: Category ) {
    // add to array
  }

}
