import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { Route } from "@angular/router/src/config";
import { LoginComponent } from "./login.component";

const LOGIN_ROUTES : Route[] = [
     { 
         path: 'login', 
         component: <any>LoginComponent,
        }
];

@NgModule({
        imports: [
            RouterModule.forChild(LOGIN_ROUTES)
        ],
        exports: [
            RouterModule
        ]
})

export class LoginRoutingModule{}