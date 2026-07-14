import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShipResources } from './manage-ship-resources';

describe('ManageShipResources', () => {
  let component: ManageShipResources;
  let fixture: ComponentFixture<ManageShipResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageShipResources],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageShipResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
