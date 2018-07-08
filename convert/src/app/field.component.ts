import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const SELECTOR: string = "compare-field";

const TEMPLATE: string = `
    <mat-form-field class="example-full-width">
      <input matInput placeholder="{{title}}" (keyup)="onKeyUp($event)" [(value)]="this.value">
    </mat-form-field>
`;

const STYLES: string = `
  input: width: 100%;
`;

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class FieldComponent implements OnInit {

  @Input() public title: string;
  @Input() public multiplier: number;
  @Input() public value : number;
  @Output() valChanged: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    this.valChanged.emit({ value: parseFloat($event.target.value) });
  }

}
