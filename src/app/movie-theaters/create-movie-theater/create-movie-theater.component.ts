import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theaters.mode';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor(private movieTheaterService: MovieTheatersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(movieTheaer: movieTheatersCreationDTO){
     console.log(movieTheaer);
     this.movieTheaterService.create(movieTheaer).subscribe(()=>{
        this.router.navigate(['/movitheaters']);
     });
  }

}
