import { Component } from '@angular/core';import 
{ Router } from '@angular/router';
import { DadosService } from './dados.service';
import { Filmes } from './tabb1.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  filmes: Filmes[] = [
    {
      id: "cap-civil-war",
      nome: "Capitão América: Guerra Civil",
      desc: "string",
      fav: 74,
      imagePath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lS5XvvUcJy5rJcbmBeX1GPoMnWJ.jpg",
      dataDur: "2016 - 2h 16min",
      generos: ['Ação', 'Aventura', 'Ficção Científica'],
      pagina: "/cap-civil-war"
    }
  ];

  constructor(public dadosService: DadosService, public route: Router) { }

  abrir(filmes: Filmes[]){
    this.dadosService.guardar('filme',filmes);
    this.route.navigateByUrl('/info-filmes')
  }
}