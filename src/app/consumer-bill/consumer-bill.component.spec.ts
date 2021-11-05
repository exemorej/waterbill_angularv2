import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBillComponent } from './consumer-bill.component';

describe('ConsumerBillComponent', () => {
  let component: ConsumerBillComponent;
  let fixture: ComponentFixture<ConsumerBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
