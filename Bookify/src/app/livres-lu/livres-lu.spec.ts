import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresLu } from './livres-lu';

describe('LivresLu', () => {
  let component: LivresLu;
  let fixture: ComponentFixture<LivresLu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivresLu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivresLu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
