import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CostSharedService } from '../cost-shared.service';
import { CarTableRowComponent } from '../car-table-row/car-table-row.component';
import { CsValidators } from '../../shared-module/validators/cs-validators';
import { parse } from 'url';
import { CanComponentDeactivate } from '../../guard/form-can-deactivate.guard';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit, CanComponentDeactivate {
  @ViewChild("totalCostRef") totalCostRef : TotalCostComponent;
  @ViewChild("addCarTitle") addCarTitle : ElementRef;
  @ViewChildren(CarTableRowComponent) carRows : QueryList<CarTableRowComponent>;
  totalCost : number;
  grossCost : number;
  cars : Car[];
  carForm : FormGroup;
  counter = 0;

  constructor(private carsService : CarsService, 
    private router: Router, 
    private formBuilder : FormBuilder, 
    private costSharedService : CostSharedService,
    private renderer : Renderer2
  ) { 
    console.log(carsService.randomValue, 'TotalCostComponent');
  }

  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  ngAfterViewInit()
  {
   const addCarTitle = this.addCarTitle.nativeElement;
   this.carForm.valueChanges.subscribe(() => {
     if(this.carForm.invalid){
       this.renderer.setStyle(addCarTitle, 'color', 'red');
     }else{
       this.renderer.setStyle(addCarTitle, 'color', 'white');
     }
   })

   this.totalCostRef.showGross();
   this.carRows.changes.subscribe(() => {
     if(this.carRows.first.car.clientSurname === 'Kowalski')
     {
       console.log('Warning, Client Kowalski is next queue, better go to holidays');
     }
   })
  }

  loadCars() : void
  {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
      this.costSharedService.shareCost(this.totalCost);
    });
  }

  addCar()
  {
    let carFormData = Object.assign({}, this.carForm.value);
    carFormData.cost = this.getPartsCost(carFormData.parts);
    //const carFormData = Object.assign({}, this.carForm.value);
    //carFormData.parts = [carFormData.parts];
    this.carsService.addCar(carFormData).subscribe(() =>{
      this.loadCars();
    });
  }


  showGross() : void
  {
    this.totalCostRef.showGross();
  }

  countTotalCost() : void
  {
    this.totalCost = this.cars.map((car) => car.cost).reduce((prev, next) => prev + next);
  }

  onShownGross (grossCost : number) : void
  {
    this.grossCost = grossCost;
  }

  goToCarDetails(car : Car)
  {
    this.router.navigate(['/cars', car.id]);
  }

  buildCarForm()
  {
    return this.formBuilder.group({
        model: ['',  Validators.required],
        type: '',
        plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
        deliveryDate: '',
        deadline: '',
        color: '',
        power: ['', CsValidators.power],
        clientFirstName: '',
        clientSurname: '',
        isFullyDamaged: '',
        year: '',
        parts: this.formBuilder.array([])
    })
  }

  togglePlateValidity()
  {
    const damageControl = this.carForm.get('isFullyDamaged');
    const plateControl = this.carForm.get('plate');

    if(damageControl.value)
    {
      plateControl.clearValidators();
    }else{
      plateControl.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(7)]);
    }

    plateControl.updateValueAndValidity();
  }

  onRemovedCar(car : Car)
  {
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });
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

  getPartsCost(parts)
  {
    return parts.reduce((prev, nextPart) => {
      return parseFloat(prev) + parseFloat(nextPart.price);
    }, 0);
  }

  canDeactivate(){
    if(!this.carForm.dirty){
      return true;
    }
    return window.confirm('Discard changes?');
  }

  ngAfterViewChecked(){
    this.counter++;
    console.log('this.counter', this.counter);
  }
}
