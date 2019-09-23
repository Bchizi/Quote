import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote(1,'The sea, once it casts its spell, holds one in its net of wonder forever.','Jacques Yves Cousteau',new Date(2019,1,19)),
    new Quote(2,'Because there’s nothing more beautiful than the way the ocean refuses to stop kissing the shoreline, no matter how many times it’s sent away.','Mother Theresa',new Date(2019,1,19)),
    new Quote(3,'A great man is always willing to be little','Ralph Waldo Emerson',new Date(2019,1,19)),
    new Quote(4,'The greatest wealth is to live content with little','Plato',new Date(2019,8,18)),
  ];

  
  toggleQuote(index){
    this.quotes[index].showQuote=!this.quotes[index].showQuote;
  }

  removeQuote(removeIt,index){
    if (removeIt) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.creationDate = new Date(quote.creationDate)
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
