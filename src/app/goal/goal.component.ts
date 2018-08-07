import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals=[
    new Goal (1, "Watch Mesut the GOAT", "achieved", new Date(2018,3,14)),
    new Goal (2, "Learn a new lifeskill", "not achieved", new Date(2018,6,9) ),
    new Goal(3, "Get new windows laptop", "cannot be achived", new Date (2015,4,6)),
    new Goal (4, "Go have some fun outside the country ", "pending", new Date(2016,5,7)),
    new Goal (5, "Hit the gym", "lol"),
  ]

  completeGoal(isComplete,index){
        if (isComplete){
            this.goals.splice(index,1);
            }
            }


toogleDetails(index){
  this.goals[index].showstatus=!this.goals[index].showstatus;
}

  constructor() { }

  ngOnInit() {
  }

}
