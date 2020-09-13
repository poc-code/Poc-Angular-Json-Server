import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produto : Produto;
  produtos : Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.buscarProdutos();
  }
  buscarProdutos(){
    this.produtoService.buscarProdutos().subscribe((produtos : Produto[]) => {
      this.produtos = produtos;
    });
  }
  buscarProdutoPorId(id : number){
    this.produtoService.buscarProdutoPorId(id).subscribe((produto : Produto) => {
      this.produto = produto;
    });
  }
  salvarProduto(form: NgForm) {
    if (this.produto.id == 0) {
      this.produtoService.salvarProduto(this.produto).subscribe((produto: Produto) => {
        this.produto = produto;
      });
    } else {
      this.produtoService.atualizarProduto(this.produto).subscribe((produto: Produto) => {
        this.produto = produto;
      });
    }
  }
  deletarProduto(produto : Produto){
    this.produtoService.deletarrProduto(this.produto).subscribe((produto: Produto) => {
      this.produto = produto;
    });
  }
}
