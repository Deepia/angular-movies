import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'angular-movies';
  display=true;
  double(n: number){
    return 2*n;
  }
 

  fetchRating(index: number){
    alert(index);
  }
}
