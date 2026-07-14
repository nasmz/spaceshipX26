import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePassangerProfile } from './manage-passanger-profile';

describe('ManagePassangerProfile', () => {
  let component: ManagePassangerProfile;
  let fixture: ComponentFixture<ManagePassangerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePassangerProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagePassangerProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
