import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Car } from '../models/car';




@Component({
  selector: '[cs-car-table-row]',
  templateUrl: './car-table-row.component.html'
})
export class CarTableRowComponent implements OnInit {
  @Input() car : Car;
  @Output() removedCar = new EventEmitter();
  @HostBinding('class.after-deadline') deadline : boolean = false;
  @HostListener('mouseenter') onMouseEnter(){
    this.setRemoveBtnStyle('red');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setRemoveBtnStyle('black');
  }

  constructor(private el : ElementRef, private renderer : Renderer2){}

  ngOnInit(){
    this.deadline = new Date(this.car.deadline) < new Date;
  }

  removeCar(car, event)
  {
    event.stopPropagation();
    this.removedCar.emit(car);
  }

  private setRemoveBtnStyle(color){
    this.renderer.setStyle(this.el.nativeElement.querySelector('.remove-btn'), 'color', color);
  }

}
