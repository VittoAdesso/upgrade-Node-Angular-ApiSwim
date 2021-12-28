import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaldaComponent } from './espalda.component';

describe('EspaldaComponent', () => {
  let component: EspaldaComponent;
  let fixture: ComponentFixture<EspaldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaldaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
