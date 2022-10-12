import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'sachin';
  flower_img =
    'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg';
  // flag:boolean = true;
  flag: boolean = false;

  f1(msg: string) {
    console.log('F1 Called....', msg);
  }
  togglePara() {
    this.flag = !this.flag;
  }
  num1: number = 0;
  num2: number = 0;
}
