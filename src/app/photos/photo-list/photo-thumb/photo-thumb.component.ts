import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photo-thumb',
  templateUrl: './photo-thumb.component.html',
  styleUrls: ['./photo-thumb.component.css']
})
export class PhotoThumbComponent implements OnInit {

  @Input() url = '';
  @Input() description = '';
  @Input() imageId = 0;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public showDetails(image: HTMLElement): void {
    this.router.navigate(['photo', image.id]);    
  }

}
