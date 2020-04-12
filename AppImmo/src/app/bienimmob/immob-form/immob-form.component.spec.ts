import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobFormComponent } from './immob-form.component';

describe('ImmobFormComponent', () => {
  let component: ImmobFormComponent;
  let fixture: ComponentFixture<ImmobFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmobFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
