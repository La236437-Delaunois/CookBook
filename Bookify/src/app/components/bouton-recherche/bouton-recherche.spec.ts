import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonRecherche } from './bouton-recherche';

describe('BoutonRecherche', () => {
  let component: BoutonRecherche;
  let fixture: ComponentFixture<BoutonRecherche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonRecherche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonRecherche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
