import { TestBed } from '@angular/core/testing';

import { ReadBookService } from './read-book';

describe('ReadBook', () => {
  let service: ReadBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
