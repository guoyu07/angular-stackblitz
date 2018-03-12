import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackblitzEmbedComponent } from './stackblitz-embed.component';

describe('StackblitzEmbedComponent', () => {
  let component: StackblitzEmbedComponent;
  let fixture: ComponentFixture<StackblitzEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackblitzEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackblitzEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
