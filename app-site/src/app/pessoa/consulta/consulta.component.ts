import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PessoaService} from '../../services/pessoa.service';
import {Pessoa} from '../../services/pessoa';
import {Response} from '../../services/response';

@Component({selector: 'app-consulta-pessoa', templateUrl: './consulta.component.html', styleUrls:["./consulta.component.css"]})
export class ConsultaComponent implements OnInit
{
    private pessoas: Pessoa[] = new Array();
    private titulo: string;

    constructor(private pessoaService: PessoaService, private router: Router)
    {

    }

    /* Função carregada logo após a inicialização do component */
    ngOnInit()
    {
        this.titulo = "Registros Cadastrados";

        /* Chama o servidor e retorna todas as pessoas cadastradas */
        this.pessoaService.findAllPessoas().subscribe(res => this.pessoas = res);
    }

    /* Exclui um registro quando clickamos na opção "Excluir" em uma linha da tabela */
    excluir(id: number, index: number): void
    {  
        if (confirm("Deseja realmente excluir esse registro?"))
        {
            this.pessoaService.deletePessoaById(id).subscribe(response =>
            {
                alert("Registro deletado com sucesso!");
                window.location.reload();
            },
            (erro) =>
            {
                /* Caso tenhamos algum erro */
                alert("Pessoa não deletada!");
            });
        }
    }

    editar(id: number): void
    {
        this.router.navigate(['/atualiza-pessoa', id]);
    }
}