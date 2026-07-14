import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAccess } from './resource-access';

describe('ResourceAccess', () => {
  let component: ResourceAccess;
  let fixture: ComponentFixture<ResourceAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
