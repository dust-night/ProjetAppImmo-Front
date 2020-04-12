import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienimmobComponent } from './bienimmob.component';

describe('BienimmobComponent', () => {
  let component: BienimmobComponent;
  let fixture: ComponentFixture<BienimmobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienimmobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienimmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
