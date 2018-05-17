import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})

export class MusicasComponent implements OnInit {
  
  musicasSelecionadas: Array<any> = new Array<any>()
  @Input() listaMusicas: Array<any> = new Array<any>();
  @Output() adicionado: EventEmitter<any> = new EventEmitter<any>();
  @Output() atualizarMusicasEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
  }

  public atualizarMusicas(musicas: Array<any>) {
    console.log("filho 1");
    this.atualizarMusicasEvent.emit(musicas);
  }

  public selecionarMusica(musica: any) {
    console.log("evento selecionar musica")
    this.adicionado.emit(musica);
  }
}
