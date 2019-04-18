import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CostSharedService {
  totalCostSource$ = new Subject<number>();

  shareCost(cost : number)
  {
    this.totalCostSource$.next(cost);
  }
}
