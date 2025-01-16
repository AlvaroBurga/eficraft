import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceUploadComponent } from './reference-upload.component';

describe('ReferenceUploadComponent', () => {
  let component: ReferenceUploadComponent;
  let fixture: ComponentFixture<ReferenceUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
