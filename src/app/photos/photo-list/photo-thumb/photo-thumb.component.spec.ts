import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoThumbComponent } from './photo-thumb.component';

describe('PhotoComponent', () => {
  let component: PhotoThumbComponent;
  let fixture: ComponentFixture<PhotoThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
