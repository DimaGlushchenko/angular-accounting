import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillComponent } from './pages/bill/bill.component';
import { HistoryComponent } from './pages/history/history.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { RecordsComponent } from './pages/records/records.component';
import { SystemComponent } from './system/system.component';
import { HistoryDetailComponent } from './pages/history/history-detail/history-detail.component';
import { AuthGuard } from './../shared/services/auth.guard';
import { GridComponent } from './pages/grid/grid.component';

const routes: Routes = [
    {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
        {path: 'bill', component: BillComponent},
        {path: 'history', component: HistoryComponent},
        {path: 'history/:id', component: HistoryDetailComponent},
        {path: 'planning', component: PlanningComponent},
        {path: 'records', component: RecordsComponent},
        {path: 'grid', component: GridComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SystemRoutingModule { }
