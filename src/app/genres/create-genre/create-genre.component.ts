import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  errors: string[] =[];
  constructor(private router: Router,
    private genresService: GenresService) { }
  
  ngOnInit(): void {
    
  }
  saveChanges(genreCreationDTO: genreCreationDTO){
    //...SAve the genre
    this.genresService.create(genreCreationDTO).subscribe(
      ()=>{
      this.router.navigate(['/genres']);
    },error =>this.errors = parseWebAPIErrors(error));
    
  }
  

}
