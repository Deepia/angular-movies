import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges,OnDestroy,DoCheck,AfterViewInit {
  
  @ViewChild(RatingComponent)
  rating!: RatingComponent;

  @Input()
  title: any;
  timer!: ReturnType<typeof setInterval>;
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('do check');
  }
  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.rating);
  }

  ngOnInit(): void {
    console.log('On Init');
    console.log(this.rating);
    this.timer=setInterval(()=>console.log(new Date()),1000);
  }



}
