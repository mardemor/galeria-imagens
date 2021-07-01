import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoThumbComponent } from './photo-list/photo-thumb/photo-thumb.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotosService } from './photos.service';
import { PaginationComponent } from './photo-list/pagination/pagination.component';
import { PhotoLargeComponent } from './photo-details/photo-large/photo-large.component';


@NgModule({
  declarations: [
    PhotoThumbComponent,
    PhotoListComponent,
    PhotoDetailsComponent,
    PaginationComponent,
    PhotoLargeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [PhotosService]
})
export class PhotosModule { }
