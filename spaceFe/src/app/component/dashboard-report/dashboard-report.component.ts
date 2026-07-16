import { Component } from '@angular/core';
import { UsageReport } from '../../models/usage.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-report',
  imports: [CommonModule,DatePipe],
  templateUrl: './dashboard-report.component.html',
  styleUrl: './dashboard-report.component.css',
})
export class DashboardReportComponent {


  usageReports: UsageReport[] = [
    {
      id: 1,
      passengerId: 101,
      resourceId: 1,
      resourceName: 'Engine Room',
      usageCount: 3,
      usageDate: new Date('2026-07-16'),
      status: 'Completed'
    },
    {
      id: 2,
      passengerId: 102,
      resourceId: 2,
      resourceName: 'Medical Bay',
      usageCount: 1,
      usageDate: new Date('2026-07-15'),
      status: 'In Use'
    },
    {
      id: 3,
      passengerId: 103,
      resourceId: 3,
      resourceName: 'Lifeboat',
      usageCount: 2,
      usageDate: new Date('2026-07-14'),
      status: 'Completed'
    }
  ];
}
