import { Component, OnInit } from '@angular/core';
import { ModalParams } from 'src/app/models/modalparams';
import { ModalComponent } from 'src/app/modules/shared/modal/component/modal/modal.component';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  params: ModalParams;
  modal : ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    alert("so pra ver o que acontece");
    this.modal.open();
  }

}
