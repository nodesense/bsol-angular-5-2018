import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],

  // all local to module
  declarations: [
      LikeComponent, 
      PowerPipe, 
      FilterPipe, 
      HighlightDirective],

      // export subset of component, directive, pipes
      // for other modules
  exports: [
    LikeComponent,
    PowerPipe,
    FilterPipe,
    HighlightDirective
  ],

  providers: [
    DataService
  ]
})
export class SharedModule { }
