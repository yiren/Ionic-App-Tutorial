import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit{

  productName:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.productName=this.navParams.get('product');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
    console.log(this.navParams.get('product'));
    console.log(this.navParams.data);
    this.productName=this.navParams.get('product');
  }

  onGoToCheckout(){
    this.navCtrl.popToRoot();
  }

}
