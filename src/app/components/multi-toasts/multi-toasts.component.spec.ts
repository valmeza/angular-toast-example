import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiToastsComponent } from './multi-toasts.component';

describe('MultiToastsComponent', () => {
  let component: MultiToastsComponent;
  let fixture: ComponentFixture<MultiToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiToastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
