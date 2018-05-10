import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { BuyoutPage } from './../pages/buyout/buyout';
import { ContactPage } from '../pages/contact/contact';
import { FavoritesPage } from './../pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { LibraryPage } from '../pages/library/library';
import { MyApp } from './app.component';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { ShopPage } from '../pages/shop/shop';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from './../pages/users/users';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    UsersPage,
    ShopPage,
    BuyoutPage,
    FavoritesPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    LibraryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    ShopPage,
    BuyoutPage,
    FavoritesPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    LibraryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
