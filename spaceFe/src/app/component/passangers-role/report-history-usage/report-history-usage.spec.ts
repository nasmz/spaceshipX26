import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHistoryUsage } from './report-history-usage';

describe('ReportHistoryUsage', () => {
  let component: ReportHistoryUsage;
  let fixture: ComponentFixture<ReportHistoryUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportHistoryUsage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportHistoryUsage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
