import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unlivre } from './unlivre';

describe('Unlivre', () => {
  let component: Unlivre;
  let fixture: ComponentFixture<Unlivre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unlivre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unlivre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
