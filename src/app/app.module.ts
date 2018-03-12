import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StackblitzEmbedModule } from './modules/stackblitz-embed/stackblitz-embed.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StackblitzEmbedModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
