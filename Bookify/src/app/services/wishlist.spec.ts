import { TestBed } from '@angular/core/testing';

import { Wishlist, WishlistService } from './wishlist';

describe('Wishlist', () => {
  let service: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
