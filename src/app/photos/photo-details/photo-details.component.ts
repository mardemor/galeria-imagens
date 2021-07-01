import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Photo } from '../photo';
import { PhotosService } from '../photos.service';


@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  public photo!: Photo;

  constructor(
    private titleService: Title,
    private photoService: PhotosService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('My Picture - Photo details');
    const id = this.route.snapshot.params.id;
    this.photo = this.photoService.getPhotoById(id);    
  }

  public showPhotoList() {
    this.router.navigateByUrl('photos');
  }

}
