import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './carros_inicio.component.html',
  styleUrls: ['./carros_inicio.component.css']
})

export class CarrosInicioComponent implements OnInit {

  car = {} as Car;
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCars();
  }

  //chama o serviço para obter todos os carros
  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    })
  }
  //define se o carro será criado ou atualizado
  saveCar(form: NgForm) {
    if (this.car.id != undefined) {
      this.carService.udpateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      })
    } else {
      this.carService.saveCar(this.car).subscribe(() => {
        this.cleanForm(form);
      })
    }
  }
  // deleta um carro
  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.getCars();
    });
  }
  // copia o carro para ser editado.
  editCar(car: Car) {
    this.car = { ...car };
  }
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as Car;
  }
}
