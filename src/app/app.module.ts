import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MusicasComponent } from './musicas/musicas.component';
import { MusicaService } from './musicas.service';
import { PesquisaMusicaComponent } from './pesquisa-musica/pesquisa-musica.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PesquisaPlaylistComponent } from './pesquisa-playlist/pesquisa-playlist.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicasComponent,
    PesquisaMusicaComponent,
    PlaylistComponent,
    PesquisaPlaylistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule
  ],

  providers: [MusicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
