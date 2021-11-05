import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectionListComponent } from './disconnection-list.component';

describe('DisconnectionListComponent', () => {
  let component: DisconnectionListComponent;
  let fixture: ComponentFixture<DisconnectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisconnectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisconnectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
