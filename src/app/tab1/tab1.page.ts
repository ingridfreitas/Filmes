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

  titulo = "Filmes";

  filmes: Filmes[] = [
    {
      nome: "Capitão América: Guerra Civil",
      fav: 74,
      imagePath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lS5XvvUcJy5rJcbmBeX1GPoMnWJ.jpg",
      dataDur: "2016 - 2h 16min",
      generos: ['Ação', 'Aventura', 'Ficção Científica'],
    },
    {
      nome: "Enrolados",
      fav: 76,
      imagePath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wZzVkdnc0kw20lSJc13ZmgTPah3.jpg",
      dataDur: "2010 - 1h 41min",
      generos: ['Animação', 'Família'],
    },
    {
      nome: "Os Mercenários 2",
      fav: 62,
      imagePath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d1Dy5uR4t8tyjZEo8mHq6q0dnRD.jpg",
      dataDur: "2012 - 1h 43min",
      generos: ['Ação', 'Aventura', 'Thriller'],
    },
    {
      nome: "Harry Potter e a Ordem da Fênix",
      fav: 77,
      imagePath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tIf9aUyNljda9MG1pjlOLHCZ3b0.jpg",
      dataDur: "2007 - 2h 18min",
      generos: ['Fantasia', 'Aventura', 'Mistério'],
    },
    {
      nome: "Miraculous World: Nova York",
      fav: 83,
      imagePath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9YbyvcrHmY2SVbdfXpb8mC4Fy0g.jpg",
      dataDur: "2020 - 52min",
      generos: ['Animação', 'Aventura', 'Família'],
    }
  ];

  constructor(public dadosService: DadosService, public route: Router) { }

  abrirFilme(filmes: Filmes){
    this.dadosService.guardar('filme',filmes);
    this.route.navigateByUrl('/info-filmes')
  }
}