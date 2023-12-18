import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainInfoPageComponent } from './chain-info-page.component';

describe('ChainInfoPageComponent', () => {
  let component: ChainInfoPageComponent;
  let fixture: ComponentFixture<ChainInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChainInfoPageComponent]
    });
    fixture = TestBed.createComponent(ChainInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
