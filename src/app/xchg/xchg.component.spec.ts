import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchgComponent } from './xchg.component';

describe('XchgComponent', () => {
  let component: XchgComponent;
  let fixture: ComponentFixture<XchgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
