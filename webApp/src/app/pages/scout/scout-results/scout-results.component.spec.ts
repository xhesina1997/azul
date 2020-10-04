import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutResultsComponent } from './scout-results.component';

describe('ScoutResultsComponent', () => {
  let component: ScoutResultsComponent;
  let fixture: ComponentFixture<ScoutResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
