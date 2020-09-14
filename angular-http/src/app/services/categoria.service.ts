import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }
  //headers
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
  buscarCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(environment.urlapi + '/categorias').pipe(
      retry(2)
      , catchError(this.handleError)
    );
  }
  buscarCategoriaPorId(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(environment.urlapi + '/categorias/' + id).pipe(
      retry(2)
      , catchError(this.handleError)
    );
  }
  salvarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(environment.urlapi + '/categorias', JSON.stringify(categoria), this.httpOptions)
      .pipe(
        retry(2)
        , catchError(this.handleError)
      );
  }
  atualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(environment.urlapi + '/categorias/' + categoria.id, JSON.stringify(categoria), this.httpOptions)
      .pipe(
        retry(2)
        , catchError(this.handleError)
      );
  }
  deletarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.delete<Categoria>(environment.urlapi + '/categorias/' + categoria.id, this.httpOptions)
      .pipe(
        retry(2)
        , catchError(this.handleError)
      );
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

   emitirCategoriaAlterada = new EventEmitter<string>();
}
