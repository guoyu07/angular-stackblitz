import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { EmbedOptions, Project } from '@stackblitz/sdk/typings/interfaces';
import sdk from '@stackblitz/sdk';
import { VM } from '@stackblitz/sdk/typings/VM';

@Component({
  selector: 'stackblitz-embed',
  templateUrl: './stackblitz-embed.component.html',
  styleUrls: ['./stackblitz-embed.component.css']
})
export class StackblitzEmbedComponent implements AfterViewInit {

  @Input() project: Project;
  @Input() options: EmbedOptions;
  @Output() onEmbed = new EventEmitter<VM>()

  constructor(readonly el: ElementRef) {
  }

  ngAfterViewInit() {
    sdk.embedProject(this.el.nativeElement, this.project, this.options).then((vm) => {
      this.onEmbed.emit(vm);
    });
  }

}
