import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinsuranceComponent } from './updateinsurance.component';

describe('UpdateinsuranceComponent', () => {
  let component: UpdateinsuranceComponent;
  let fixture: ComponentFixture<UpdateinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateinsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
