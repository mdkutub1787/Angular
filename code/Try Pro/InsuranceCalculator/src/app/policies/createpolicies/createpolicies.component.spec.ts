import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepoliciesComponent } from './createpolicies.component';

describe('CreatepoliciesComponent', () => {
  let component: CreatepoliciesComponent;
  let fixture: ComponentFixture<CreatepoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatepoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
