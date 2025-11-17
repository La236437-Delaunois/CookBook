import { TestBed } from '@angular/core/testing';

import { ReadBook } from './read-book';

describe('ReadBook', () => {
  let service: ReadBook;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadBook);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
