import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})


export class PaginationComponent implements OnInit {
  // numbers: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
  numbers: number[] = [];
  p = 1; // Current page number
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 16; i++) {
      this.numbers.push(i);
    }
  }

}
