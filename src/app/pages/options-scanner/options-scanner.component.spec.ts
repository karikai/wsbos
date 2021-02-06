import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsScannerComponent } from './options-scanner.component';

describe('OptionsScannerComponent', () => {
  let component: OptionsScannerComponent;
  let fixture: ComponentFixture<OptionsScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
