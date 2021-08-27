import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../tab1/dados.service';
import { Filmes } from '../tab1/tabb1.model';

@Component({
  selector: 'app-info-filmes',
  templateUrl: './info-filmes.page.html',
  styleUrls: ['./info-filmes.page.scss'],
})
export class InfoFilmesPage implements OnInit {

  filme: Filmes;

  constructor(public dadosService: DadosService, public route: Router) { }

  ngOnInit() {
    this.filme = this.dadosService.pegar('filme');
    console.log('Filme Enviado', this.filme);
  }

}
