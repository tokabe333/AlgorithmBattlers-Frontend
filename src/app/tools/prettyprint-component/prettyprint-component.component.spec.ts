import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyprintComponentComponent } from './prettyprint-component.component';

describe('PrettyprintComponentComponent', () => {
  let component: PrettyprintComponentComponent;
  let fixture: ComponentFixture<PrettyprintComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrettyprintComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyprintComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
