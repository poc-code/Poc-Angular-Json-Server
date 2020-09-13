import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  // add reference of the template
  @ViewChild('content') content: any;

  constructor() {}
  ngOnInit(): void { }

}
