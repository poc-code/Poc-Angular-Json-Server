import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {
  categorias: Categoria[];
  categoria: Categoria;
  closeResult: string;
  categoriaselecionada: number;

  @Input() recebeCategoria;

  constructor(private categoriaService: CategoriaService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.buscarCategorias();
  }
  buscarCategorias() {
    this.categoriaService.buscarCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }
  buscarCategoriaPorId(id){
    this.categoriaService.buscarCategoriaPorId(id).subscribe((categoria: Categoria) => {
      this.categoria = categoria;
    });
  }
  
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  reciverFeedback(respostaDoform) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaDoform);
    this.salvarCategoria(respostaDoform);
  }

  private salvarCategoria(categoria: Categoria){
      if(this.categoria.id == undefined){
        this.categoriaService.salvarCategoria(categoria).subscribe(() => {
          alert("Categoria criada");
        });
      }else{
        this.categoriaService.atualizarCategoria(categoria).subscribe(() => {
          alert("Categoria atualizada");
        });
      }
      this.buscarCategorias();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
