import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgongoParkComponent } from './ngongo-park.component';

describe('NgongoParkComponent', () => {
  let component: NgongoParkComponent;
  let fixture: ComponentFixture<NgongoParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgongoParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgongoParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
