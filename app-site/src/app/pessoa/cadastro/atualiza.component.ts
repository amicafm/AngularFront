import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {PessoaService} from '../../services/pessoa.service';
import {Pessoa} from '../../services/pessoa';
import {Response} from '../../services/response';
import { Observable } from 'rxjs/Observable';

@Component({selector: 'app-atualiza-pessoa', templateUrl: './atualiza.component.html', styleUrls:["./atualiza.component.css"]})
export class AtualizaComponent implements OnInit
{
    public titulo: string;
    public pessoa: Pessoa = new Pessoa();

    constructor(private pessoaService: PessoaService, private router: Router, private activatedRoute: ActivatedRoute)
    {

    }

    /*CARREGADO NA INICIALIZACAO DO COMPONENTE */
    ngOnInit()
    {
        this.activatedRoute.params.subscribe(parametro =>
        {
            this.titulo = "Editar Cadastro de Pessoa";
            this.pessoaService.findPessoaById(Number(parametro["id"])).subscribe(data => this.pessoa = data);
        });
    }

    /*FUNCAO PARA SALVAR UM NOVO REGIST10RO OU ALTERACAO EM EXISTENTE */
    salvar(): void
    {
        /*AQUI VAMOS ATUALIZAR AS INFORMACOES DE UM REGISTRO EXISTENTE */
        this.pessoaService.updatePessoa(this.pessoa).subscribe(response =>
        {
            alert('Registro atualizado com sucesso!');

            this.router.navigate(['/consulta-pessoa']);
        },
        (erro) =>
        {
            /**AQUI MOSTRA OS ERROS NAO TRATADOS
             EXEMPLO: SE APLICACAO NAO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
            alert("Não foi possível atualizar o registro!");
        });
    }
}