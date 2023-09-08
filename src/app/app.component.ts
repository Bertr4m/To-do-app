import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoapp';

  dataInput: string ='';
  forTodayCheck: boolean = false;
  forTomorrowCheck: boolean = false;
  todayListCheckbox: boolean [] = [];
  tomorrowListCheckbox: boolean [] = [];
  todayList: string[] = [];
  tomorrowList: string[] = [];

  load() {
    if (this.dataInput) {
      if (this.forTodayCheck) {
        this.todayList.push(this.dataInput);
        this.todayListCheckbox.push(false);
      } else if (this.forTomorrowCheck) {
        this.tomorrowList.push(this.dataInput);
        this.tomorrowListCheckbox.push(false);
      }
      this.dataInput = '';
      this.forTodayCheck = false;
      this.forTomorrowCheck = false;
    }
  }

  moveToday() {
    for (let i = this.tomorrowListCheckbox.length - 1; i >= 0; i--) {
      if (this.tomorrowListCheckbox[i]) {
        const taskToMove = this.tomorrowList.splice(i, 1)[0];
        this.tomorrowListCheckbox.splice(i, 1);
        this.todayList.push(taskToMove);
        this.todayListCheckbox.push(false);
      }
    }
  }
  
  moveTomorrow() {
    for (let i = this.todayListCheckbox.length - 1; i >= 0; i--) {
      if (this.todayListCheckbox[i]) {
        const taskToMove = this.todayList.splice(i, 1)[0];
        this.todayListCheckbox.splice(i, 1);
        this.tomorrowList.push(taskToMove);
        this.tomorrowListCheckbox.push(false);
      }
    }
  }

  moveOut(){
    for( let i= this.todayListCheckbox.length -1; i>= 0; i--){
      if(this.todayListCheckbox[i]){
        this.todayList.splice(i, 1);
        this.todayListCheckbox.splice(i, 1);
      }
    }

    for( let i= this.tomorrowListCheckbox.length -1; i>= 0; i--){
      if(this.tomorrowListCheckbox[i]){
        this.tomorrowList.splice(i, 1);
        this.tomorrowListCheckbox.splice(i, 1);
      }
    }
  }
}

