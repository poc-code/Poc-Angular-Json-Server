import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  categorias : Categoria[];
  categoria: Categoria;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Categoria> = new Subject();

  constructor(private categoriaservice : CategoriaService, private http : HttpClient ) { }

  ngOnInit(): void {
    this.dtOptions = {
        pagingType: 'full_numbers',
        lengthMenu: [5,10,20]
      };
    this.buscarCategorias();
  }

  buscarCategorias(){
    this.categoriaservice
    .buscarCategorias()
    .subscribe(( categorias : Categoria[]) => {
      this.categorias = categorias;
      this.dtTrigger.next();
    })
  }

}
