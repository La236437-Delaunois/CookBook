import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLivre } from './popup-livre';

describe('PopupLivre', () => {
  let component: PopupLivre;
  let fixture: ComponentFixture<PopupLivre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupLivre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupLivre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
