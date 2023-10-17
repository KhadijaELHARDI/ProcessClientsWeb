import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherDetailsComponent } from './further-details.component';

describe('FurtherDetailsComponent', () => {
  let component: FurtherDetailsComponent;
  let fixture: ComponentFixture<FurtherDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurtherDetailsComponent]
    });
    fixture = TestBed.createComponent(FurtherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
