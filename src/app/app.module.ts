import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { CrimeComponent } from './crime/crime.component';
import { DescriptionPipe } from './description-pipe';
import { HeaderComponent } from './header/header.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { WorldComponent } from './world/world.component';

const allLinks:Routes = [
  {path:'BusinessNews',component:BusinessnewsComponent},
  {path:'Politics',component:PoliticsComponent},
  {path:'Crime',component:CrimeComponent},
  {path:'World',component:WorldComponent},
  {path:'Technology',component:TechnologyComponent},
  {path:'Sports',component:SportsComponent},
  {path:'newsDetail/:category',component:ViewDetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    BusinessnewsComponent,
    CrimeComponent,
    HeaderComponent,
    PoliticsComponent,
    SportsComponent,
    DescriptionPipe,
    TechnologyComponent,
    ViewDetailsComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
