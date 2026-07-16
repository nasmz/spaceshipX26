import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceList } from './component/resource-list/resource-list';
import { PassengerListComponent } from './component/passenger-list/passenger-list.component';
import { DashboardReportComponent } from './component/dashboard-report/dashboard-report.component';

export const routes: Routes = [
    {   path: '', 
        component: DashboardReportComponent
    },
    {   path: 'users-list', 
        component: PassengerListComponent
    },
    {
        path: 'resource-list',
        component: ResourceList,
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
