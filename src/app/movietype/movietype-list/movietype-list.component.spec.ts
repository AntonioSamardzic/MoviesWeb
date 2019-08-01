import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietypeListComponent } from './movietype-list.component';

describe('MovietypeListComponent', () => {
  let component: MovietypeListComponent;
  let fixture: ComponentFixture<MovietypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovietypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
