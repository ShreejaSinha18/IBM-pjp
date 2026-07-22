import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgShared } from './ng-shared';

describe('NgShared', () => {
  let component: NgShared;
  let fixture: ComponentFixture<NgShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgShared],
    }).compileComponents();

    fixture = TestBed.createComponent(NgShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
