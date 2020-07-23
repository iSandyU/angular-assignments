import {Component} from '@angular/core';

@Component({
    selector : 'app-display',
    templateUrl: './display.component.html',
    styleUrls : ['./display.component.css']
})
export class DisplayComponent{

    displayDetails = false ;

    counter = 0 ;

    clickArr = [] ;
    //dateArr = [] ;

    toggleDisplay(){
        this.counter++ ;
        //this.dateArr.push(Date.now);
        this.clickArr.push(this.counter) ;
        this.displayDetails = !this.displayDetails;
    }

}