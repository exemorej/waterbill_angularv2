import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBillAddComponent } from './consumer-bill-add.component';

describe('ConsumerBillAddComponent', () => {
  let component: ConsumerBillAddComponent;
  let fixture: ComponentFixture<ConsumerBillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBillAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerBillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
