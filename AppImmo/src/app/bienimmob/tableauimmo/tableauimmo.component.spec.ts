import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauimmoComponent } from './tableauimmo.component';

describe('TableauimmoComponent', () => {
  let component: TableauimmoComponent;
  let fixture: ComponentFixture<TableauimmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauimmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauimmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
