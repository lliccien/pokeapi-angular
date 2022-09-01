import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    PageNoFoundComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ToolbarComponent,
    PageNoFoundComponent
  ]
})
export class SharedModule { }
