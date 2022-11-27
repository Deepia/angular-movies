import { Component, OnInit } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor() { }
  model: movieDTO ={title: 'Sider-Man', inTheaters: true,
summary:"Whatever",releaseDate: new Date(),trailer:"Asw",
poster:"https://media.gettyimages.com/id/531435904/photo/actor-manoj-bajpayee-attends-the-closing-night-of-the-16th-annual-new-york-indian-film.jpg?s=612x612&w=gi&k=20&c=ho8usF3iUndYZ4fw4KiCq2DdzzwrbGYjoj8_tiFOm34="};
  ngOnInit(): void {
  }

  saveChanges(movieCreationDTO: movieCreationDTO){

  }

}
