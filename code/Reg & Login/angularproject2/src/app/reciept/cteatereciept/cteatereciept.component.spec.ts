import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteaterecieptComponent } from './cteatereciept.component';

describe('CteaterecieptComponent', () => {
  let component: CteaterecieptComponent;
  let fixture: ComponentFixture<CteaterecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CteaterecieptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CteaterecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
