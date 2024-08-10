import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecieptComponent } from './viewreciept.component';

describe('ViewrecieptComponent', () => {
  let component: ViewrecieptComponent;
  let fixture: ComponentFixture<ViewrecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewrecieptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
