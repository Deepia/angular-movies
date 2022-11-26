import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theaters.mode';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor() { }
  model: movieTheatersCreationDTO ={name: 'Agora'};
  ngOnInit(): void {
  }

  saveChanges(movieTheaer: movieTheatersCreationDTO){
    console.log(movieTheaer);
  }

}
