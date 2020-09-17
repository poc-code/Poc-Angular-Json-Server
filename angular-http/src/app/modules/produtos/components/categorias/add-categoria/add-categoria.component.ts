import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {
  @Input() categoria : Categoria;
  @Output() categoriaAdicionada : EventEmitter<Categoria> = new EventEmitter<Categoria>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarNovaCategoria(form: NgForm){
    this.categoriaAdicionada.emit(this.categoria);
  }
}
