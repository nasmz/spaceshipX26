import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityUsageReport } from './activity-usage-report';

describe('ActivityUsageReport', () => {
  let component: ActivityUsageReport;
  let fixture: ComponentFixture<ActivityUsageReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityUsageReport],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityUsageReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
