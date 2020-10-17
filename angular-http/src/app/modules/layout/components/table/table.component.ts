import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  categorias: Categoria[];
  categoria: Categoria;
  produtos: Produto[];
  produto: Produto;
  dtOptions: DataTables.Settings = {};

  constructor(private categoriaservice: CategoriaService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.buscarCategorias();
  }

  buscarCategorias() {
    this.categoriaservice
      .buscarCategorias()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
      })
  }

}
