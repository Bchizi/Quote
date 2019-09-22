import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Username. ', 'Authors name inaekwa apa.', 'The is the inspirational quote.'),
    new Quote(2, 'Username. ', 'Authors name inaekwa apa.', 'The is the inspirational quote.'),
    new Quote(3, 'Username. ', 'Authors name inaekwa apa.', 'The is the inspirational quote.'),
    new Quote(4, 'Username. ', 'Authors name inaekwa apa.', 'The is the inspirational quote.'),
    new Quote(5, 'Username. ', 'Authors name inaekwa apa.', 'The is the inspirational quote.')
  ]

  
  toggleQuote(index){
    this.quotes[index].showQuote=!this.quotes[index].showQuote;
  }
  constructor() { }

  ngOnInit() {
  }

}
