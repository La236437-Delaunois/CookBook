import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteLivre } from './carte-livre';

describe('CarteLivre', () => {
  let component: CarteLivre;
  let fixture: ComponentFixture<CarteLivre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteLivre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteLivre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
