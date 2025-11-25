import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLivre } from './page-livre';

describe('PageLivre', () => {
  let component: PageLivre;
  let fixture: ComponentFixture<PageLivre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLivre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLivre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
