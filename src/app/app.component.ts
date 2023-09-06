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

  load(){
    if(this.forTodayCheck){
      this.todayList.push(this.dataInput);
      this.todayListCheckbox.push(false);
    }

    if(this.forTomorrowCheck){
      this.tomorrowList.push(this.dataInput);
      this.tomorrowListCheckbox.push(false);
    }
  }

  moveToday(){

  }

  moveTomorrow(){
    
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

