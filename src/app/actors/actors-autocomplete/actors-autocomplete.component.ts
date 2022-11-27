import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }
  control: FormControl= new FormControl();
  actors=[
    {name:'Pankaj Tripathi', picture:'https://upload.wikimedia.org/wikipedia/commons/5/50/Pankaj_Tripathi_World_Premiere_Newton_Zoopalast_Berlinale_2017_06.jpg'},
    {name:'Manoj Bajpai', picture:'https://media.gettyimages.com/id/531435904/photo/actor-manoj-bajpayee-attends-the-closing-night-of-the-16th-annual-new-york-indian-film.jpg?s=612x612&w=gi&k=20&c=ho8usF3iUndYZ4fw4KiCq2DdzzwrbGYjoj8_tiFOm34='},
    {name:'Alu Arjun', picture:'https://yt3.ggpht.com/ytc/AMLnZu-Niy4xRPBN9WsTqRq697n_d8Ui-Ap-cCMzIc3Xmw=s900-c-k-c0x00ffffff-no-rj'},
  ]

  selectedActors:any[] = [];
  originalActors = this.actors;
  columnToDisplay =['picture','name','character','actions'];
  @ViewChild(MatTable)
  table!: MatTable<any>;
  ngOnInit(): void {
    this.control.valueChanges.subscribe(value=>{
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor=>actor.name.indexOf(value)!=-1)
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }

  }

  remove(actor:any){
     const index = this.selectedActors.findIndex(a=>a.name== actor.name);
     this.selectedActors.splice(index,1);
     this.table.renderRows();
    }

    dropped(event: CdkDragDrop<any[]>){
      const previousIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
      moveItemInArray(this.selectedActors,previousIndex,event.currentIndex);
      this.table.renderRows();
    }

}
