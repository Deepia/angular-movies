import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';

import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.mode';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {
  initialCoordinates: coordinatesMap[] =[];

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;
  @Input()
  model!: movieTheatersDTO;
  @Output()
  onSaveChages = new EventEmitter<movieTheatersCreationDTO>()
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      latitude:['',{
        validators:[Validators.required]
      }],
      longitude:['',{
        validators:[Validators.required]
      }]
    })
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude,longitude: this.model.longitude})
    }
  }

  onSelectedLocation(coordinates: coordinatesMap){
    this.form.patchValue(coordinates);
  }

  saveChanges(){
     this.onSaveChages.emit(this.form.value);
  }

}
