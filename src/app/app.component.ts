import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit {
  ngOnInit(): void {
    
    setTimeout(() => {
      this.moviesInTheater=[
        {
        name:"dil",
        releaseDate: new Date(),
        price:67
      },
      {
        name:"mela",
        releaseDate: new Date(),
        price:68
      }
    ]
    this.futureReleases=[
      {
      name:"kaho n pyar hai",
      releaseDate: new Date(),
      price:67
    },
    {
      name:"Fizza",
      releaseDate: new Date(),
      price:68
    }
  ]
    }, 3000);
  }
  title = 'angular-movies';
  display=true;
  double(n: number){
    return 2*n;
  }
  moviesInTheater!: { name: string; releaseDate: Date; price: number; }[];
  futureReleases!: { name: string; releaseDate: Date; price: number; }[];

  fetchRating(index: number){
    alert(index);
  }
}
