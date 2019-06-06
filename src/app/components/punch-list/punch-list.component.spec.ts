import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchListComponent } from './punch-list.component';

describe('PunchListComponent', () => {
  let component: PunchListComponent;
  let fixture: ComponentFixture<PunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
