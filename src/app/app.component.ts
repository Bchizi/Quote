import { Component } from '@angular/core';
import { Quote } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote = [
    { id: 1, name: 'leon',author:'albert',quote:'the is the inspirational quote' },
    { id: 2, name: 'bchizi' ,author:'albert',quote:'the is the inspirational quote'},
    { id: 3, name: 'nyambu',author:'albert',quote:'the is the inspirational quote' },
    { id: 4, name: 'bebee',author:'albert',quote:'the is the inspirational quote' },
    { id: 5, name: 'Solve math homework',author:'albert',quote:'the is the inspirational quote' },
    { id: 6, name: 'Plot my world domination plan',author:'albert',quote:'the is the inspirational quote' },

  ];

  constructor() {

  }

}
