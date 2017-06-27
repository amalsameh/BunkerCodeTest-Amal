import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { PeopleComponent } from './people/people.component';
import { AddComponent } from './people/add/add.component';
import {PeopleService} from './people/people.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionsComponent,
    PeopleComponent,
    AddComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
