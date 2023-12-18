import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNefturiansUserComponent } from './fake-nefturians-user.component';

describe('FakeNefturiansUserComponent', () => {
  let component: FakeNefturiansUserComponent;
  let fixture: ComponentFixture<FakeNefturiansUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeNefturiansUserComponent]
    });
    fixture = TestBed.createComponent(FakeNefturiansUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
