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
  todayList: string[] = [];
  tomorrowList: string[] = [];

  load(){
    if(this.forTodayCheck){
      this.todayList.push(this.dataInput);
    }

    if(this.forTomorrowCheck){
      this.tomorrowList.push(this.dataInput);
    }
  }
}

