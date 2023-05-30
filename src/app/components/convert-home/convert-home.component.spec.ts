import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertHomeComponent } from './convert-home.component';

describe('ConvertHomeComponent', () => {
  let component: ConvertHomeComponent;
  let fixture: ComponentFixture<ConvertHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertHomeComponent]
    });
    fixture = TestBed.createComponent(ConvertHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
