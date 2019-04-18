import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { Route } from "@angular/router/src/config";
import { CarDetailsComponent } from "./car-details/car-details.component";
import { CarResolve } from "./car-resolve.service";
import { CarsComponent } from "./cars.component";
import { CarsListComponent } from "./cars-list/cars-list.component"
import { FormCanDeactivateGuard } from "../guard/form-can-deactivate.guard";

const CARS_ROUTES : Route[] = [
    {
        path: '',
        component: <any> CarsComponent,
        children: [
            {
                path: '',
                component: <any>CarsListComponent,
                canDeactivate: [FormCanDeactivateGuard]
            },
            { 
                path: ':id', 
                component: <any>CarDetailsComponent,
                resolve: { car: CarResolve }
            }
        ]
    }
];

@NgModule({
        imports: [
            RouterModule.forChild(CARS_ROUTES)
        ],
        exports: [
            RouterModule
        ]
})

export class CarsRoutingModule{}