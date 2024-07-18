import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceBillsComponent } from './insurance-bills.component';

describe('InsuranceBillsComponent', () => {
  let component: InsuranceBillsComponent;
  let fixture: ComponentFixture<InsuranceBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceBillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
