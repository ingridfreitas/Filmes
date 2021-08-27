import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoFilmesPage } from './info-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: InfoFilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoFilmesPageRoutingModule {}
