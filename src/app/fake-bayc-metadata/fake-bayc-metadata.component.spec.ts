import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBaycMetadataComponent } from './fake-bayc-metadata.component';

describe('FakeBaycMetadataComponent', () => {
  let component: FakeBaycMetadataComponent;
  let fixture: ComponentFixture<FakeBaycMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeBaycMetadataComponent]
    });
    fixture = TestBed.createComponent(FakeBaycMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
