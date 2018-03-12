import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackblitzEmbedComponent } from './stackblitz-embed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StackblitzEmbedComponent],
  exports: [StackblitzEmbedComponent]
})
export class StackblitzEmbedModule { }
