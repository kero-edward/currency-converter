import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertDetailsComponent } from './convert-details.component';

describe('ConvertDetailsComponent', () => {
  let component: ConvertDetailsComponent;
  let fixture: ComponentFixture<ConvertDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertDetailsComponent]
    });
    fixture = TestBed.createComponent(ConvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
