import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MusicaService }  from '../musicas.service'
@Component({
  selector: 'app-pesquisa-musica',
  templateUrl: './pesquisa-musica.component.html',
  styleUrls: ['./pesquisa-musica.component.css']
})
export class PesquisaMusicaComponent implements OnInit {
  @Output() atualizarMusicasEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
  }

  public "nome-musica": string = null;

  public pesquisar(nomeMusica: string) {
    if (nomeMusica.length > 3) {
      console.log(nomeMusica);
      this.musicaService.getMusicas(nomeMusica)
        .then((result: any) => {
        // console.log(result.json());
        this.atualizarMusicasEvent.emit(result.json());
      
        
      });
    }
  }

}
