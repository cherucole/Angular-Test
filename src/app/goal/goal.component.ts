import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals=[
    new Goal (1, "Watch Mesut the GOAT", "achieved"),
    new Goal (2, "Learn a new lifeskill", "not achieved" ),
    new Goal(3, "Get new windows laptop", "cannot be achived"),
    new Goal (4, "Go have some fun outside the country ", "pending"),
    new Goal (5, "Hit the gym", "lol"),
  ]
toogleDetails(index){
  this.goals[index].showstatus=!this.goals[index].showstatus;
}

  constructor() { }

  ngOnInit() {
  }

}
