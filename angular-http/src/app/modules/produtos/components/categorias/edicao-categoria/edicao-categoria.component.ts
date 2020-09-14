import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-edicao-categoria',
  templateUrl: './edicao-categoria.component.html',
  styleUrls: ['./edicao-categoria.component.css']
})
export class EdicaoCategoriaComponent implements OnInit {
  userId;

  @Input('categoria') categoria: Categoria;
  @Output() respostaDoform : EventEmitter<Categoria> = new EventEmitter<Categoria>();

  constructor() { }
  
  ngOnInit(): void {}

  feedback(form : NgForm) {
    this.respostaDoform.emit(this.categoria);
  }
}
