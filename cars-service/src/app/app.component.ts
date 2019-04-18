import { Component } from '@angular/core';
import { LayoutService } from './shared-module/services/layout.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private layoutService : LayoutService, private router : Router){}
  isSidebarVisible : boolean = false;
  isLoading : boolean = false;

  ngOnInit(){
    this.layoutService.sidebarSource$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });

    this.router.events.subscribe((routerEvent : Event) => this.checkRouterEvent(routerEvent));
  }

  private checkRouterEvent(routerEvent : Event){
    if(routerEvent instanceof NavigationStart){
      this.isLoading = true;
      // setTimeout(() => {
      //   this.isLoading = false;
      // }, 10000);
    }else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
      this.isLoading = false;
    }
  }

}
