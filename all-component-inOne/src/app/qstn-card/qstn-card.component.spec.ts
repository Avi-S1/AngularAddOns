import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QstnCardComponent } from './qstn-card.component';

describe('QstnCardComponent', () => {
  let component: QstnCardComponent;
  let fixture: ComponentFixture<QstnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QstnCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QstnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
