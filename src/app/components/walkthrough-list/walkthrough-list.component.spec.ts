import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughListComponent } from './walkthrough-list.component';

describe('WalkthroughListComponent', () => {
  let component: WalkthroughListComponent;
  let fixture: ComponentFixture<WalkthroughListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkthroughListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkthroughListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
