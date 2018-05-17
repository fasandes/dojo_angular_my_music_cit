import { Component, OnInit, ViewChild } from '@angular/core';
import { MusicaService } from '../musicas.service';
import {MatSnackBar, MatButton} from '@angular/material';



import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  fabAdd: MatButton;
  fabRemove: MatButton;
  musicas: any;
  musicasElencadas: Array<any> = new Array<any>();
  musicasSelecionadas: Array<any> = new Array<any>();
  musicasSelecionadasRemocao: Array<any> = new Array<any>();

  constructor(private musicaService: MusicaService, private snackBar: MatSnackBar) { }


  ngOnInit() {
    // this.musicaService.getMusicas('a-ha')
    //   .then((result: any) => {
    //     this.musicas = result.json();
    //   });
    this.fabAdd.disabled = true;
  }

  public atualizarMusicas(musicas: Array<any>) {
    this.musicas = [];
    this.musicas = this.musicas.concat(musicas);
    

  }

  public atualizarPlaylist(musica: any) {
 
    if (musica == null) {
      if (this.musicasSelecionadas.length > 0) {
        this.musicasSelecionadas = [];
      } else {
        this.musicas.forEach(element => {
          this.musicasSelecionadas.push(element);
        });
      }

    } else {
      let index = this.musicasSelecionadas.indexOf(musica)
      if (index < 0) {
        this.musicasSelecionadas.push(musica);
      } else {
        this.musicasSelecionadas.splice(index, 1)
      }
    }
   
    console.log(this.musicasSelecionadas);
  }

  criaPlaylist() {
    
     
    this.musicasElencadas = new Array<any>();
    this.musicasElencadas =  this.musicasElencadas.concat(this.musicasSelecionadas);
    //this.musicasPlaylist = this.musicasSelecionadas;
    this.musicaService.putPlayList([])
      .toPromise().then((resposta: any) => {
        if (resposta.status == "200") {
          
            
        }
      })

      this.snackBar.open(this.musicasElencadas.length + " musicas adicionadas",'Ok', {
        duration: 3000
      });
  }

  removerMusicas() {
    this.musicasSelecionadasRemocao.forEach((musica) => {
      let index = this.musicasElencadas.indexOf(musica);
      if (index >= 0) {
        this.musicasElencadas.splice(index, 1);
      }
    });

    this.snackBar.open(this.musicasSelecionadasRemocao.length + " musicas removidas",'Ok', {
      duration: 3000
    });
    
    this.musicasSelecionadasRemocao = [];

  }

  public marcaMusicaRemocao(musica: any) {
    let index = this.musicasSelecionadasRemocao.indexOf(musica);
    if (index >= 0) {
      this.musicasSelecionadasRemocao.splice(index, 1);
    } else {
      this.musicasSelecionadasRemocao.push(musica);
    }
  }
}
