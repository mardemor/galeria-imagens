import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Photo } from '../photo';
import { PhotosService } from '../photos.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  public paginatedPhotos!: any[];
  public pageCount!: number;
  public currentPage!: Photo[];
 
  constructor(
    private photoService: PhotosService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('My Picture - Photo list');
    this.paginatedPhotos = this.photoService.getPaginatedPhotos();
    this.pageCount = this.paginatedPhotos.length;
    this.currentPage = this.paginatedPhotos[0];
  }

  public changePage(valor: number): void {
    this.currentPage = this.paginatedPhotos[valor-1]; 
  }
  
}
