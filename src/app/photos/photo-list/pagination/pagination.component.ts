import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() emissor = new EventEmitter<number>();
  @Input() pageCount = 0;
  public pageNumbers: number[] = [];
  public isActive: boolean = false;
    
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= this.pageCount; i++) {
      this.pageNumbers.push(i);
    }
  }

  public pageClick(target: EventTarget | null) {
    const element = target as HTMLInputElement;
    const valor = parseInt(element.value);
    this.emissor.emit(valor);  
  }

}
