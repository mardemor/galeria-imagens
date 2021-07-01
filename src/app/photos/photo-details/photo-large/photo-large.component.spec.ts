import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLargeComponent } from './photo-large.component';

describe('PhotoLargeComponent', () => {
  let component: PhotoLargeComponent;
  let fixture: ComponentFixture<PhotoLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
