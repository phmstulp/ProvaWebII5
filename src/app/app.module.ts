import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LavacarComponent } from './cadastros/lavacar/lavacar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatPaginatorModule, MatSort, 
  MatSortModule, MatExpansionModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LavacarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule, //Daqui pra baixo são componentes do material
    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule, 
    MatIconModule, 
    HttpClientModule, //Adicionei aqui (icone) //from '@angular/common/http';
    MatPaginatorModule, 
    MatSortModule, 
    MatExpansionModule, 
    MatSelectModule

  ],
  providers: [HttpClient], //Adicionei aqui (icone)
  bootstrap: [AppComponent]
})
export class AppModule { }
