import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']

})
export class ProgressComponent implements OnInit {

  public progress1: number = 25;
  public progress2: number = 35;


  public get getProgress1() {
    return `${this.progress1}%`
  }

  public get getProgress2() {
    return `${this.progress2}%`
  }


  constructor() { }

  ngOnInit(): void {
  }

}
