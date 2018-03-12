import { Component } from '@angular/core';
import { Project } from '@stackblitz/sdk/typings/interfaces';

declare const require;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  project: Project = {
    title: 'testing',
    description: 'example',
    template: 'angular-cli',
    files: {
      'index.html': '<my-app>loading</my-app>',
      'main.ts': require('!!raw-loader!./main.ts')
    }
  };
}
