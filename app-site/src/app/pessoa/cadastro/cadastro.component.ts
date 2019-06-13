import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {PessoaService} from '../../services/pessoa.service';
import {Pessoa} from '../../services/pessoa';
import {Response} from '../../services/response';
import { Observable } from 'rxjs/Observable';

@Component({selector: 'app-cadastro-pessoa', templateUrl: './cadastro.component.html', styleUrls:["./cadastro.component.css"]})
export class CadastroComponent implements OnInit
{
    public titulo: string;
    public pessoa: Pessoa = new Pessoa();

    constructor(private pessoaService: PessoaService, private router: Router, private activatedRoute: ActivatedRoute)
    {

    }

    /* Função carregada logo após a inicialização do component */
    ngOnInit()
    {
        this.activatedRoute.params.subscribe(parametro =>
        {
            this.titulo = "Novo Cadastro de Pessoa";
        });
    }

    /* Cadastra um novo registro no banco de dados */
    salvar(): void
    {
        this.pessoaService.createPessoa(this.pessoa).subscribe(response =>
        {
            alert('Registro criado com sucesso!');
            window.location.reload();
        },
        (erro) =>
        {
            /* Caso tenhamos algum erro */
            alert('Erro! Não foi possível criar novo registro!');
        });
    }
}