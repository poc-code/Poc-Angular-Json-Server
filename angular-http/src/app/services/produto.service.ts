import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Produto } from '../models/produto';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient :  HttpClient) { }
  //headers
  httpOptions ={
    headers: new HttpHeaders({'content-type':'application/json'})
  }

  buscarProdutos(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(environment.urlapi +'/produtos')
    .pipe(
      retry(2)
      ,catchError(this.handleError)
    )
  } 
  buscarProdutoPorId(id:number): Observable<Produto>{
    return this.httpClient.get<Produto>(environment.urlapi +'/produtos/'+id)
    .pipe(
      retry(2)
      ,catchError(this.handleError)
    )
  } 
  buscarProdutoPorCategoriaId(id:number): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(environment.urlapi +'/produtos?categoriaid='+id)
    .pipe(
      retry(2)
      ,catchError(this.handleError)
    )
  } 
  salvarProduto(produto:Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(environment.urlapi +'/produtos', JSON.stringify(produto), this.httpOptions)
    .pipe(
      retry(1)
      ,catchError(this.handleError)
    )
  }
  atualizarProduto(produto: Produto): Observable<Produto>{
    return this.httpClient.put<Produto>(environment.urlapi +'/produtos', JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(1)
        ,catchError(this.handleError)
      )
  }
  deletarrProduto(produto: Produto): Observable<Produto>{
    return this.httpClient.delete<Produto>(environment.urlapi +'/produtos/' + produto.id, this.httpOptions)
      .pipe(
        retry(2)
        ,catchError(this.handleError)
      )
  }
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
