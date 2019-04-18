import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DateInfoComponent } from './date-info/date-info.component';



@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  @ViewChild('dateInfoContainer', {read: ViewContainerRef}) dateInfoContainer : ViewContainerRef;
  car : Car;
  carForm : FormGroup;
  elapsedDays : number;
  dateInfoRef;

  constructor(
    private carsService : CarsService, 
    private route : ActivatedRoute, 
    private formBuilder : FormBuilder, 
    private router : Router, 
    private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit() {
    
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  createDateInfo(){
    if(this.dateInfoContainer.get(0) !== null){
      return;
    }
    const dateInfoFactory = this.componentFactoryResolver.resolveComponentFactory(<Type<DateInfoComponent>>DateInfoComponent);
    this.dateInfoRef = <ComponentRef<DateInfoComponent>>this.dateInfoContainer.createComponent(dateInfoFactory);
    this.dateInfoRef .instance.car = this.car;

    this.dateInfoRef .instance.checkElapsedDays.subscribe((elapsedDays) => {
      this.elapsedDays = elapsedDays;
    })
  }

  clearDateInfoContainer(){
    this.dateInfoRef.destroy();
  }

  buildCarForm()
  {
    let parts = this.car.parts.map((part) => this.formBuilder.group(part));
    return this.formBuilder.group({
        model: [this.car.model,  Validators.required],
        type: this.car.type,
        plate: [this.car.plate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
        deliveryDate: this.car.deliveryDate,
        deadline: this.car.deadline,
        color: this.car.color,
        power: this.car.power,
        clientFirstName: this.car.clientFirstName,
        clientSurname: this.car.clientSurname,
        isFullyDamaged: this.car.isFullyDamaged,
        year: this.car.year,
        parts: this.formBuilder.array(parts)
    })
  }

  loadCar()
  {
    this.car = this.route.snapshot.data['car'];
  }

  updateCar()
  {
    let carFormData = Object.assign({}, this.carForm.value);
    carFormData.cost = this.getPartsCost(carFormData.parts);
    this.carsService.updateCar(this.car.id, carFormData).subscribe(() =>{
      this.router.navigate(['/cars']);
    });
  }

  getPartsCost(parts)
  {
    return parts.reduce((prev, nextPart) => {
      return parseFloat(prev) + parseFloat(nextPart.price);
    }, 0);
  }

  buildParts() : FormGroup
  {
    return this.formBuilder.group({
        name: '',
        inStock: true,
        price: ''
    })
  }

  get parts() : FormArray
  {
    return <FormArray>this.carForm.get('parts');
  }

  addPart() : void
  {
    this.parts.push(this.buildParts());
  }

  removePart(i) : void
  {
    this.parts.removeAt(i);
  }
}
