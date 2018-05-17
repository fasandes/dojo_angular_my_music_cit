import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {MusicaService} from '../musicas.service'

@Component({
  selector: 'app-pesquisa-playlist',
  templateUrl: './pesquisa-playlist.component.html',
  styleUrls: ['./pesquisa-playlist.component.css']
})
export class PesquisaPlaylistComponent implements OnInit {

  @Output() atualizarMusicas: EventEmitter<any> = new EventEmitter<any>()

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
  }

  public pesquisar (nomeUsuario: string) {
    this.musicaService.getPlaylists(nomeUsuario)
      .then((result: any) => {
        console.log("usuario : " + result);
        this.atualizarMusicas.emit(result.json())
        
      });
   
  }

}
