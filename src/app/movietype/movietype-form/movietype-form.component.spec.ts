import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietypeFormComponent } from './movietype-form.component';

describe('MovietypeFormComponent', () => {
  let component: MovietypeFormComponent;
  let fixture: ComponentFixture<MovietypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovietypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
