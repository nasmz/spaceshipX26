import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReportComponent } from './dashboard-report.component';

describe('DashboardReportComponent', () => {
  let component: DashboardReportComponent;
  let fixture: ComponentFixture<DashboardReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardReportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
