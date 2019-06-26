import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastController} from 'ionic-angular';
/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  teamA = 0;
  teamB = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }
  addA(val){
    if (val == 1){
      this.teamA = this.teamA + 1
    } else if (val == 2){
      this.teamA = this.teamA + 2
    } else {
      this.teamA = this.teamA + 3;
        const toast = this.toastCtrl.create({
          message: 'Nice one Heat',
          duration: 3000
        });
        toast.present();
    }
  }
  addB(val){
    if (val == 1){
      this.teamB = this.teamB + 1
    } else if (val == 2){
      this.teamB = this.teamB + 2
    } else {
      this.teamB = this.teamB + 3;
      const toast = this.toastCtrl.create({
        message: 'Nice one Warriors',
        duration: 3000
      });
      toast.present();
    }
  }
  reset(){
    this.teamA = 0;
    this.teamB = 0;
  }
  goback(){
    this.navCtrl.pop()
  }
}
