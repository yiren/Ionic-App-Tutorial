import { Button, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ElementRef } from '@angular/core';

import { BuyoutPage } from '../buyout/buyout';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }
  goToBuyout(product:Button){

    const productName=(product.getNativeElement() as HTMLElement).textContent;

    this.navCtrl.push(BuyoutPage, {product:productName});
  }

}
