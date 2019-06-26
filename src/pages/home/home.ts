import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScorePage } from '../score/score';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  className = 'hide';
  text: number = 1;
  constructor(public navCtrl: NavController) {
    console.log(this.text);

  }
  toggleClass(){
    if (this.className == 'show'){
      this.className = 'hide';
    } else {
      this.className = 'show';
    }
    console.log(this.className);
  }
  toScore(){
    this.navCtrl.push(ScorePage);
  }
  setTextS(val){
    this.text = val;
    console.log(this.text);

  }
}
