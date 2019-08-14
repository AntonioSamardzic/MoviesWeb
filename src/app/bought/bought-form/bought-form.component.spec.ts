import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtFormComponent } from './bought-form.component';

describe('BoughtFormComponent', () => {
  let component: BoughtFormComponent;
  let fixture: ComponentFixture<BoughtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
