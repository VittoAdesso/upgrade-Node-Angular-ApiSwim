import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariposaComponent } from './mariposa.component';

describe('MariposaComponent', () => {
  let component: MariposaComponent;
  let fixture: ComponentFixture<MariposaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariposaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MariposaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
