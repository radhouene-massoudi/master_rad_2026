import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaradComponent } from './marad.component';

describe('MaradComponent', () => {
  let component: MaradComponent;
  let fixture: ComponentFixture<MaradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaradComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
