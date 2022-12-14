import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import {  } from 'stream';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;
  @Input()
  model!: movieDTO;
  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();
  nonSelectedGenres: multipleSelectorModel[] =[
     {key:1, value:"Drama"},
     {key:2, value:"Action"},
     {key:3, value:"Comedy"}
  ];
  
  selectedGenres: multipleSelectorModel[] =[];

  nonSelectedMovieTheaters: multipleSelectorModel[]=[
    {key:1, value:"Agora"},
    {key:2, value:"Sambil"},
    {key:3, value:"Megacecntro"}
  ]

  selectedMovieTheaters: multipleSelectorModel[]=[];
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['',{
         validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      moviTheatersIds: ''
    })
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  onImageSelected(file: File){
    this.form.get('poster')?.setValue(file);
  }
  changeMarkdown(content: string){
    this.form.get('summary')?.setValue(content);
  }
  saveChanges(){
    const genresIds = this.selectedGenres.map(value=>value.key);
    this.form.get('genresIds')?.setValue(genresIds);

    const moviTheatersIds = this.selectedMovieTheaters.map(value=>value.key);
    this.form.get('moviTheatersIds')?.setValue(moviTheatersIds);
     this.onSaveChanges.emit(this.form.value);
  }

}
