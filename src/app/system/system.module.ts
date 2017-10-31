import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { HistoryComponent } from "./pages/history/history.component";
import { BillComponent } from "./pages/bill/bill.component";
import { PlanningComponent } from "./pages/planning/planning.component";
import { RecordsComponent } from "./pages/records/records.component";
import { SystemComponent } from "./system/system.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BillCardComponent } from './pages/bill/bill-card/bill-card.component';
import { BillService } from './shared/services/bill.service';
import { CurrencyCardComponent } from './pages/bill/currency-card/currency-card.component';
import { MomentPipe } from './shared/pipes/moment.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    HistoryComponent,
    PlanningComponent,
    RecordsComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    BillComponent,
    BillCardComponent,
    CurrencyCardComponent,
    MomentPipe
  ],
  providers: [BillService]
})
export class SystemModule {}
