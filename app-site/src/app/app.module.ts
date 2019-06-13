import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {ConsultaComponent} from './pessoa/consulta/consulta.component';
import {AtualizaComponent} from './pessoa/cadastro/atualiza.component';
import {CadastroComponent} from './pessoa/cadastro/cadastro.component';
import {routing} from './../app.routes';
import {ConfigService} from './services/config.service';
import {PessoaService} from './services/pessoa.service';

/* As linhas abaixo definem os módulos e componentes que usaremos no projeto. 
É importante notar que dentro de declaration estão os componentes que usaremos. Todos esses components
devem também estar, obrigatoriamente, em app.routes.ts */

@NgModule({
  declarations:
  [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent,
    AtualizaComponent
  ],
  imports:
  [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService,PessoaService],
  bootstrap: [AppComponent]
})

export class AppModule
{

}