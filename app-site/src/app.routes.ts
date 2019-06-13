import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConsultaComponent} from './app/pessoa/consulta/consulta.component';
import {CadastroComponent} from './app/pessoa/cadastro/cadastro.component';
import {AtualizaComponent} from './app/pessoa/cadastro/atualiza.component';
import {HomeComponent} from './app/home/home.component';

/* As linhas abaixo definem as possíveis rotas que o projeto poderá seguir, de acordo 
com a página vigente. Cada linha {path: "xxxxxx", component: xxxxx} representa uma parte 
que será  mostrada na URL e o componente associado à ela */

const appRoutes: Routes = 
[
    { path: 'home',                     component: HomeComponent },
    { path: '',                         component: HomeComponent },
    { path: 'consulta-pessoa',          component: ConsultaComponent },
    { path: 'cadastro-pessoa',          component: CadastroComponent },
    { path: 'cadastro-pessoa/:id',      component: CadastroComponent },
    { path: 'atualiza-pessoa/:id',      component: AtualizaComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);