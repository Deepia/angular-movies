import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.moviesInTheater=[
        {
          title:"dil",
        releaseDate: new Date(),
        price:67,
        poster:"https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Dil.jpg"
      },
      {
        title:"mela",
        releaseDate: new Date(),
        price:68,
        poster:"https://m.media-amazon.com/images/M/MV5BMTIwNTE2NjcwN15BMl5BanBnXkFtZTcwODA3ODgzMQ@@._V1_.jpg"
      }
    ]
    this.futureReleases=[
      {
        title:"kaho n pyar hai",
      releaseDate: new Date(),
      price:67,
      poster:"https://m.media-amazon.com/images/M/MV5BNTViZjk0OGMtMTllMi00YjcyLTg4ZTMtNmEzZjlmZWIwNDJjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
      title:"Fizza",
      releaseDate: new Date(),
      price:68,
      poster:"http://timesofindia.indiatimes.com/photo/61322851.cms"
    }
  ]
    }, 3000);
  }
  moviesInTheater!: { title: string; releaseDate: Date; price: number;poster: string; }[];
  futureReleases!: { title: string; releaseDate: Date; price: number;poster: string;}[];

}
