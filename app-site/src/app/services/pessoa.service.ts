import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {Pessoa} from '../services/pessoa';
import {ConfigService} from './config.service';

@Injectable()
export class PessoaService
{
    private baseUrlService = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http, private configService: ConfigService)
    { 
        /**SETANDO A URL DO SERVICE REST */
        this.baseUrlService = configService.getUrlService() + '/pessoacontroller';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
    findAllPessoas()
    {
        return this.http.get(this.baseUrlService + '/buscaPessoa').map(res => res.json());
    }

    /**ADICIONA UMA NOVA PESSOA */
    createPessoa(pessoa: Pessoa)
    {
        let formData: FormData = new FormData();
        formData.append('nome', pessoa.nome);
        formData.append('sobrenome', pessoa.sobrenome);

        return this.http.post(this.baseUrlService + '/adicionaPessoa', formData).map(res => res.json());
    }

    /**EXCLUI UMA PESSOA */
    deletePessoaById(id: number)
    {
        return this.http.delete(this.baseUrlService + '/deletaPessoa/' + id).map(res => res.json());
    }

    /**CONSULTA UMA PESSOA PELO CODIGO */
    findPessoaById(id: number)
    {
        return this.http.get(this.baseUrlService + '/buscaPessoaById/' + id).map(res => res.json());
    }

    /**ATUALIZA INFORMACOES DA PESSOA */
    updatePessoa(pessoa: Pessoa)
    {
        let formData: FormData = new FormData();
        
        formData.append('id', String(pessoa.id));
        formData.append('nome', pessoa.nome);
        formData.append('sobrenome', pessoa.sobrenome);

        return this.http.put(this.baseUrlService + '/atualizaPessoa', formData).map(res => res.json());
    }
}