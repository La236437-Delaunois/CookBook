import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArrive } from './page-arrive';

describe('PageArrive', () => {
  let component: PageArrive;
  let fixture: ComponentFixture<PageArrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArrive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArrive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
