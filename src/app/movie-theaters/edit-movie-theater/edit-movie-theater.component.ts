import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.mode';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor() { }
  model: movieTheatersDTO ={name: 'Agora',latitude:28.56801343968869,longitude:77.32665896415712};
  ngOnInit(): void {
  }

  saveChanges(movieTheaer: movieTheatersCreationDTO){
    console.log(movieTheaer);
  }

}
