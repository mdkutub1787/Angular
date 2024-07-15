import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutubComponent } from './kutub.component';

describe('KutubComponent', () => {
  let component: KutubComponent;
  let fixture: ComponentFixture<KutubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KutubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KutubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
