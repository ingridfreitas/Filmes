import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFilmesPageRoutingModule } from './info-filmes-routing.module';

import { InfoFilmesPage } from './info-filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFilmesPageRoutingModule
  ],
  declarations: [InfoFilmesPage]
})
export class InfoFilmesPageModule {}
