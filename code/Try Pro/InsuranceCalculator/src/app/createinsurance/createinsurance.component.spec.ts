import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinsuranceComponent } from './createinsurance.component';

describe('CreateinsuranceComponent', () => {
  let component: CreateinsuranceComponent;
  let fixture: ComponentFixture<CreateinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateinsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
