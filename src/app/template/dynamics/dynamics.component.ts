import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface People{
  name: string,
  favorites: Favorite[],
}

interface Favorite{
  id: number,
  game: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent  {

  newGame: string = "";

  people: People = {
    name: "Carlos",
    favorites: [
      { id:1, game:"Mario64" },
      { id:2, game:"Zelda" }
    ]
  }

  @ViewChild('myDynamicForm') myDynamicForm!: NgForm

  

  validationName(): boolean {
    return this.myDynamicForm?.controls.name?.invalid &&
           this.myDynamicForm?.controls.name?.touched
  }

  add() {
    const newGame={
      id: this.people.favorites.length + 1,
      game: this.newGame
    }

    this.people.favorites.push({...newGame});
    this.newGame = "";

  }

  delete(idx: number){
    this.people.favorites.splice(idx, 1);
  }

  save(){
    console.log(this.myDynamicForm.controls.name);
  }

}
