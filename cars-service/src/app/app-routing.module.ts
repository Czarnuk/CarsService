import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { Route } from "@angular/router/src/config";
import { CarsListComponent } from "./cars/cars-list/cars-list.component";
import { AuthCanLoadGuard } from "./guard/auth-can-load.guard";
import { PageNotFoundComponent } from "./shared-module/page-not-found/page-not-found.component";


const APP_ROUTES : Route[] = [
    { 
        path: '', pathMatch: 'full', 
        redirectTo: 'login'
    },
    { 
        path: 'cars', 
        canLoad: [AuthCanLoadGuard],
        loadChildren: 'app/cars/cars.module#CarsModule' 
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
        imports: [
            RouterModule.forRoot(APP_ROUTES, { enableTracing: true })
        ],
        exports: [
            RouterModule
        ]
})

export class AppRoutingModule{}