import { Component, Output, EventEmitter } from '@angular/core';

const SELECTOR: string = "toolbar";

const TEMPLATE: string = `
<mat-toolbar color="primary">
  <span>Convert</span>
  <span class="fill-remaining-space"></span>
  <button mat-icon-button [matMenuTriggerFor]="menu">
    <mat-icon>more_vert</mat-icon>
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item (click)="showLength()">
      <mat-icon>keyboard_tab</mat-icon>
      <span>Length</span>
    </button>
  </mat-menu>
</mat-toolbar>
`;

const STYLES: string = "";

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class ToolbarComponent {
  
  @Output() onShowLength: EventEmitter<any> = new EventEmitter<any>();
  
  showLength() {
    this.onShowLength.emit({});
  }
  
}
