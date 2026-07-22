import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDisplay } from './users-display';

describe('UsersDisplay', () => {
  let component: UsersDisplay;
  let fixture: ComponentFixture<UsersDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
