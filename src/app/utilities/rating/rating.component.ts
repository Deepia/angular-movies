import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input() rating=5;
  @Input() selected=0;
  @Output()
  getRating:EventEmitter<number> = new EventEmitter<number>();
  previousRate: number =0;
  maxRatingArray: string[]=[];
  ngOnInit(): void {
    this.maxRatingArray =  Array(this.rating).fill(0);
  }
  handleMouseEnter(index: number){

    this.selected=index+1;
  }
  handleMouseLeave(){
    if(this.previousRate!=0){
      this.selected= this.previousRate
    }
    else{
      this.selected=0;
    }
    
  }
  rate(index: number){
    this.selected=index+1;
    this.previousRate=this.selected;
    this.getRating.emit(this.selected);
  }

}
