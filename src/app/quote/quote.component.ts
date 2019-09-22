import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   
  quotes: Quote[] = [
    { id: 1,name: 'Username. ', author: 'Authors name inaekwa apa.', quote: 'The is the inspirational quote.' },
    { id: 2,name: 'Username. ', author: 'Authors name inaekwa apa.', quote: 'The is the inspirational quote.' },
    { id: 3,name: 'Username. ', author: 'Authors name inaekwa apa.', quote: 'The is the inspirational quote.' },
    { id: 4,name: 'Username. ', author: 'Authors name inaekwa apa.', quote: 'The is the inspirational quote.' },
    { id: 5,name: 'Username. ', author: 'Authors name inaekwa apa.', quote: 'The is the inspirational quote.' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
