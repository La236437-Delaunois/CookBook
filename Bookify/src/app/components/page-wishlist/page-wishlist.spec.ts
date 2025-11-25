import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWishlist } from './page-wishlist';

describe('PageWishlist', () => {
  let component: PageWishlist;
  let fixture: ComponentFixture<PageWishlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageWishlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWishlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
