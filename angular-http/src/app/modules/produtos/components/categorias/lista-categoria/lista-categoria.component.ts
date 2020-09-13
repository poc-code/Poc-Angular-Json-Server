import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias : Categoria[];
  categoria : Categoria;

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.buscarCategorias();
  }

  buscarCategorias(){
    this.categoriaService.buscarCategorias().subscribe((categorias : Categoria[]) => {
      this.categorias =  categorias;     
    });
  }
}
