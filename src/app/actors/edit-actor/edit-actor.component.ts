import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  model: actorDTO = {
    id:1,
    name: "Manoj Bajpai", dateOfBirth: new Date(),
    biography: "default value",
    picture: 'https://img.mensxp.com/media/content/2019/Oct/iconic-movies-that-have-made-manoj-bajpayee-one-of-the-best-performers-in-the-film-industry-1200x900-1570626565.jpg'
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      alert(params['id'])
    })
  }
   saveChanges(actorCreationDTO: actorCreationDTO){
    console.log(actorCreationDTO);
   }

}
