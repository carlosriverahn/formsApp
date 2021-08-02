import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  people = {
    gender: "F",
    notifications: true,
  }

  contract: boolean = false;

}
