import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-photo-large',
  templateUrl: './photo-large.component.html',
  styleUrls: ['./photo-large.component.css']
})
export class PhotoLargeComponent implements OnInit {

  @Input() url = '';
  @Input() description = '';
  @Input() imageId = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
