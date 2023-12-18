import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBaycComponent } from './fake-bayc.component';

describe('FakeBaycComponent', () => {
  let component: FakeBaycComponent;
  let fixture: ComponentFixture<FakeBaycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeBaycComponent]
    });
    fixture = TestBed.createComponent(FakeBaycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
