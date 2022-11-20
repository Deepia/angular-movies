import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;
  genres =[{id:1, name: "Drama"},{id:2, name: "Action"}];
  movies=[{
    title:"Mela", poster:"https://m.media-amazon.com/images/M/MV5BMTIwNTE2NjcwN15BMl5BanBnXkFtZTcwODA3ODgzMQ@@._V1_.jpg"
  },
  {
    title:"Dil", poster:"https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Dil.jpg"
  },
  {
    title:"Kaho n pyar hai", poster:"https://m.media-amazon.com/images/M/MV5BNTViZjk0OGMtMTllMi00YjcyLTg4ZTMtNmEzZjlmZWIwNDJjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX190_CR0,2,190,281_.jpg"
  },
  {
    title:"Fiza", poster:"http://timesofindia.indiatimes.com/photo/61322851.cms"
  },
];
origionalMovie=this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreid: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges
    .subscribe(values=>{
     this.movies=this.origionalMovie;
     this.filterMovies(values);
    });
  }

  filterMovies(values: any){
     if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1)
     }
  }
  clearform(){
    this.form.reset();
  }
}
