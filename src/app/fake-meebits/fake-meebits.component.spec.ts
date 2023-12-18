import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeMeebitsComponent } from './fake-meebits.component';

describe('FakeMeebitsComponent', () => {
  let component: FakeMeebitsComponent;
  let fixture: ComponentFixture<FakeMeebitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeMeebitsComponent]
    });
    fixture = TestBed.createComponent(FakeMeebitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
