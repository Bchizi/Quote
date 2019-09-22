
export class Quote {
   showQuote:boolean;
   constructor(public id:number,public name:string, public author:string, public quote:string){
       this.showQuote=false;
   }
}
