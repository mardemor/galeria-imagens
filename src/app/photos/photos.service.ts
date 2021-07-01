import { Injectable } from '@angular/core';
import { Photo } from './photo';


@Injectable()
export class PhotosService {

  private photos = [
    {
      id: 1,
      url: '../../assets/images/1.jpg',
      description: 'Photo 1'
    },
    {
      id: 2,
      url: '../../assets/images/2.jpg',
      description: 'Photo 2'
    },
    {
      id: 3,
      url: '../../assets/images/3.jpg',
      description: 'Photo 3'
    },
    {
      id: 4,
      url: '../../assets/images/4.jpg',
      description: 'Photo 4'
    },
    {
      id: 5,
      url: '../../assets/images/5.jpg',
      description: 'Photo 5'
    },
    {
      id: 6,
      url: '../../assets/images/6.jpg',
      description: 'Photo 6'
    },
    {
      id: 7,
      url: '../../assets/images/7.jpg',
      description: 'Photo 7'
    },
    {
      id: 8,
      url: '../../assets/images/8.jpg',
      description: 'Photo 8'
    },
    {
      id: 9,
      url: '../../assets/images/9.jpg',
      description: 'Photo 9'
    },
    {
      id: 10,
      url: '../../assets/images/10.jpg',
      description: 'Photo 10'
    },
    {
      id: 11,
      url: '../../assets/images/11.jpg',
      description: 'Photo 11'
    },
    {
      id: 12,
      url: '../../assets/images/12.jpg',
      description: 'Photo 12'
    },
    {
      id: 13,
      url: '../../assets/images/13.jpg',
      description: 'Photo 13'
    }
  ];

  constructor() { }

  public getAllPhotos(): Photo[] {
    return this.photos;
  }

  public getPaginatedPhotos(): any[] {
    const photosPerPage = 4;    
    const clone = this.photos.slice();    
    const pages = [];    
    while(clone.length) {
      pages.push(clone.splice(0, photosPerPage));
    } 
    return pages;    
  }

  public getPhotoById(id: number): Photo {
    const photo = new Photo(
      id, `../../assets/images/${id}.jpg`, `Photo ${id}`
    );
    return photo;
  }
}
