import { Component, OnInit } from '@angular/core';
import{ Quote} from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quote(1,'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.','—Norman Vincent Peale',0,0),
    new Quote(2,'If you can dream it, you can do it.','—Walt Disney',0,0),
    new Quote(3,'Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.','—Pauline Kael',0,0),
    new Quote(4,'Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.','—George Herbert',0,0),
    new Quote(5,'Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.','—George Whitefield',0,0),
    new Quote(6,'The future belongs to those who believe in the beauty of their dreams.','—Eleanor Roosevelt',0,0),
 
 
  ]
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
    deleteQuote(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
          
          if(toDelete){
            this.quotes.splice(index,1)
        }
        }
      }
    
          

       
      
   
  constructor() { 
    
  }

  ngOnInit() {
  }

}
