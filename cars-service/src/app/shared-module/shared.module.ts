import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';
import { ImportantDirective } from './directives/important.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScrollTopDirective } from './directives/scroll-top.directive';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, SurnameShortcutPipe, ImportantDirective, PageNotFoundComponent,ScrollTopDirective, TimerComponent],
  declarations: [HeaderComponent, SurnameShortcutPipe, ImportantDirective, PageNotFoundComponent, ScrollTopDirective, TimerComponent]
})
export class SharedModule { }
