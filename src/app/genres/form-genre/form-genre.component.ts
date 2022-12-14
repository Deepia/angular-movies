import { Component, EventEmitter,Output, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  form!: FormGroup;
  @Input()
  model!: genreCreationDTO;
  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();
  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name: ['',{
        validators:[Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    })
    if(this.model !==undefined){
      this.form.patchValue(this.model);
    }
  }
  saveChanges(){
    //...SAve the genre
    this.onSaveChanges.emit(this.form.value);
  }
  getErrorMessageFieldName(){
    const field=this.form.get('name');
    if(field?.hasError('required')){
      return "The name field is required.";
    }
    if(field?.hasError('minlength')){
      return "The minimum length of name field is 3.";
    }
    if(field?.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;

    }
    return   "";
  }

}


