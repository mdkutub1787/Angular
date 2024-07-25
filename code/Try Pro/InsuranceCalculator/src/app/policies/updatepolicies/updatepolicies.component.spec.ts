import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepoliciesComponent } from './updatepolicies.component';

describe('UpdatepoliciesComponent', () => {
  let component: UpdatepoliciesComponent;
  let fixture: ComponentFixture<UpdatepoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatepoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
