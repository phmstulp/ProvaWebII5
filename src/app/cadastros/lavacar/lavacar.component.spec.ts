import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavacarComponent } from './lavacar.component';

describe('LavacarComponent', () => {
  let component: LavacarComponent;
  let fixture: ComponentFixture<LavacarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavacarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
