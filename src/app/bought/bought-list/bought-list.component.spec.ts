import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtListComponent } from './bought-list.component';

describe('BoughtListComponent', () => {
  let component: BoughtListComponent;
  let fixture: ComponentFixture<BoughtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
