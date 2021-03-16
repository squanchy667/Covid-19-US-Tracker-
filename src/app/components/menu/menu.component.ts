import { Component, OnInit } from '@angular/core';
import { CoronaService } from './../../services/corona.service'
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DatePipe]
})
export class MenuComponent implements OnInit {
  
  summaryData;
  stateData;
  stateInfo;
  text: string;
  usState = new BehaviorSubject(null);
  currentDate: string; 
  mapFillColor = '#c5e8f0';
  stateTextFillColor = '#000000';
  stateStrokeColor = '#bfbfbf';
  
  constructor(private service: CoronaService, private datePipe: DatePipe) { }

  ngOnInit() {
    let date = new Date();  
    this.currentDate = this.datePipe.transform(date,'dd-MMM-yyyy');  
    this.getAllData();
    this.usState.subscribe(currentState => this.getStateData(currentState))
    this.usState.subscribe(currentState => this.getStateInfo(currentState))
  }

  getAllData() {
    this.service.getData().subscribe(  
      response => {  
        this.summaryData = response[0];  
      }  
    ) 
  }

  getStateData(currentState: string){
    this.service.stateData(currentState).subscribe(
      response=>{
        this.stateData = response
      }
    )
  }

  getStateInfo(currentState: string){
    this.service.stateInfo(currentState).subscribe(
      response=>{
        this.stateInfo = response
        let re = "."
        let to = "\n"
        this.text = (this.stateInfo.notes).replace(re, to);
        console.log(this.text)
      }
    )
  }

  printState(data: any): void {
    this.usState.next(data['state-abbr']);
  }



}
