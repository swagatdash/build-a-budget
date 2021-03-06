import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule } from '@angular/http'


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PrimaryViewPage } from '../pages/primary-view/primary-view'
import { SecondaryViewPage } from '../pages/secondary-view/secondary-view'
import { BudgetViewPage } from '../pages/budget-view/budget-view'
import { TabBasicContentPage } from '../pages/budget-view/budget-view'
import { TransactionsViewPage } from '../pages/transactions-view/transactions-view'
import { UsersViewPage } from '../pages/users-view/users-view'
import { DashboardViewPage } from '../pages/dashboard-view/dashboard-view'
import { ApproveViewPage } from '../pages/approve-view/approve-view'
import { StartBudgetViewPage } from '../pages/startbudget-view/startbudget-view'
import { EditBudgetViewPage } from '../pages/editbudget-view/editbudget-view'
import { ReviewBudgetViewPage } from '../pages/reviewbudget-view/reviewbudget-view'
import { SubmitBudgetViewPage } from '../pages/submitbudget-view/submitbudget-view'
import { NotificationsViewPage } from '../pages/notification-view/notification-view'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PrimaryViewPage,
    SecondaryViewPage,
    BudgetViewPage,
    TabBasicContentPage,
    TransactionsViewPage,
    DashboardViewPage,
    UsersViewPage,
    ApproveViewPage,
    StartBudgetViewPage,
    EditBudgetViewPage,
    ReviewBudgetViewPage,
    SubmitBudgetViewPage,
    NotificationsViewPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PrimaryViewPage,
    SecondaryViewPage,
    BudgetViewPage,
    TabBasicContentPage,
    TransactionsViewPage,
    DashboardViewPage,
    UsersViewPage,
    ApproveViewPage,
    StartBudgetViewPage,
    EditBudgetViewPage,
    ReviewBudgetViewPage,
    SubmitBudgetViewPage,
    NotificationsViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestapiServiceProvider
  ]
})
export class AppModule {}
