import { CertificadoComponent } from './certificacoes/certificado/certificado.component';
import { CardComponent } from './testemunhos/card/card.component';
import { ItensComponent } from './nossos-servicos/itens/itens.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { HeaderComponent } from './header/header.component';
import { MarcasComponent } from './marcas/marcas.component';
import { TestemunhosComponent } from './testemunhos/testemunhos.component';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';
import { InteressouComponent } from './interessou/interessou.component';
import { ContatoComponent } from './contato/contato.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
   declarations: [
      AppComponent,
      NossosServicosComponent,
      ItensComponent,
      HeaderComponent,
      MarcasComponent,
      TestemunhosComponent,
      CardComponent,
      CertificacoesComponent,
      CertificadoComponent,
      InteressouComponent,
      ContatoComponent
   ],
   imports: [
      BrowserModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyBcRARz3tdYFnGgsciYqfC9WPoS3mzYsCA'
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
