import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreationDTO, genreDTO } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }
  private Apiurl=environment.apiURL+"/genres"
  getAll(): Observable<genreDTO[]>{
    return this.http.get<genreDTO[]>(this.Apiurl)
  }
  getById(id:number): Observable<genreDTO>{
     return this.http.get<genreDTO>(`${this.Apiurl}/${id}`);
  };

  create(genre: genreCreationDTO){
    return this.http.post(this.Apiurl,genre);
  }
  edit(id:number,genre: genreCreationDTO){
    return this.http.put(`${this.Apiurl}/${id}`,genre);
  }
  delete(id: number){
    return this.http.delete(`${this.Apiurl}/${id}`);
  }
}
