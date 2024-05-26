import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDrilldownComponent } from './member-drilldown.component';

describe('MemberDrilldownComponent', () => {
  let component: MemberDrilldownComponent;
  let fixture: ComponentFixture<MemberDrilldownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDrilldownComponent]
    });
    fixture = TestBed.createComponent(MemberDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
