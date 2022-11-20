import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  form!: FormGroup;
  
  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name: ['',{
        validators:[Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    })
  }
  saveChanges(genreCreationDTO: genreCreationDTO){
    //...SAve the genre
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }
  

}
