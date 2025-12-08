import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I9Download } from './i9-download';

describe('I9Download', () => {
  let component: I9Download;
  let fixture: ComponentFixture<I9Download>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I9Download]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I9Download);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
