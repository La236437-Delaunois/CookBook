import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLivre } from './details-livre';

describe('DetailsLivre', () => {
  let component: DetailsLivre;
  let fixture: ComponentFixture<DetailsLivre>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsLivre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLivre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
