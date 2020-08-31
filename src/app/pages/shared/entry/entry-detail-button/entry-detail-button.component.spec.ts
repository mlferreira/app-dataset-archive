import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDetailButtonComponent } from './entry-detail-button.component';

describe('EntryDetailButtonComponent', () => {
  let component: EntryDetailButtonComponent;
  let fixture: ComponentFixture<EntryDetailButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDetailButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
