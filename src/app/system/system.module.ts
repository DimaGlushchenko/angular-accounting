import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { HistoryComponent } from "./pages/history/history.component";
import { BillComponent } from "./pages/bill/bill.component";
import { PlanningComponent } from "./pages/planning/planning.component";
import { RecordsComponent } from "./pages/records/records.component";
import { SystemComponent } from "./system/system.component";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';

import { DropdownDirective } from './shared/directives/dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    HistoryComponent,
    BillComponent,
    PlanningComponent,
    RecordsComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective
  ]
})
export class SystemModule {}
