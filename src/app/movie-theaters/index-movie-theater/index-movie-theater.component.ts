import { Component, OnInit } from '@angular/core';
import { movieTheatersDTO } from '../movie-theaters.mode';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheatersService: MovieTheatersService) { }
  movieTheaters!: movieTheatersDTO[];
  displayColumns=['name','actions'];
  ngOnInit(): void {
    this.movieTheatersService.get().
    subscribe(movieTheaters=>this.movieTheaters=movieTheaters);
  }
   delete(id: number){

   }
}
