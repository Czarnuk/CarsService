import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { CarsService } from '../cars.service';




@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent implements OnChanges{
  @Input() totalCost : number;
  @Output() shownGross : EventEmitter<number> = new EventEmitter<number>();
  private VAT : number = 1.23;
  costThreshold : number = 10000;
  isCostTooLow : boolean = false;

  constructor(private carsService :  CarsService)
  {
    console.log(carsService.randomValue, 'TotalCostComponent');
  }

  showGross() : void
  {
    this.shownGross.emit(this.totalCost * this.VAT);
  }

  ngOnChanges(changes : SimpleChanges)
  {
    this.isCostTooLow = changes['totalCost'].currentValue < this.costThreshold;

    console.log('previousValue', changes['totalCost'].previousValue);
    console.log('currentValue', changes['totalCost'].currentValue);
    console.log('isFirstChange', changes['totalCost'].isFirstChange);
  }
}
