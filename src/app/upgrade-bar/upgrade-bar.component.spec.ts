import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeBarComponent } from './upgrade-bar.component';

describe('UpgradeBarComponent', () => {
  let component: UpgradeBarComponent;
  let fixture: ComponentFixture<UpgradeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
