import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http'
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { DadosService } from './dados.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    HttpClientModule,
  ],
  declarations: [Tab1Page
  ],
  providers: [DadosService],
})
export class Tab1PageModule {}
