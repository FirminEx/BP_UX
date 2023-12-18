import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNefturiansComponent } from './fake-nefturians.component';

describe('FakeNefturiansComponent', () => {
  let component: FakeNefturiansComponent;
  let fixture: ComponentFixture<FakeNefturiansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeNefturiansComponent]
    });
    fixture = TestBed.createComponent(FakeNefturiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
