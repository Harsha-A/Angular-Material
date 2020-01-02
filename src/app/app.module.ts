import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BtnComponent } from './components/btn/btn.component';
import { ToggleBtnComponent } from './components/toggle-btn/toggle-btn.component';
import { InputComponent } from './components/input/input.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { ListsComponent } from './components/lists/lists.component';
import { GridlistComponent } from './components/gridlist/gridlist.component';


@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    ToggleBtnComponent,
    InputComponent,
    DatepickerComponent,
    FormsExampleComponent,
    ListsComponent,
    GridlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
