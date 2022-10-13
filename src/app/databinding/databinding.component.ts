import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  /* template:`
    <h1>This is Databinding como</h1>
  ` */
  templateUrl: './databinding.component.html',
  // styles:['input{border:1px solid blue;}']
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
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

  addResult: number = 0;
  addition(val1: any, val2: any) {
    this.addResult = +val1 + +val2;
  }
}
