import { Component, OnInit, Input } from '@angular/core';
import Field from "./field";

@Component({
  selector: 'length-screen',
  template: `
    <form [style.display]="this.getDisplay()">
      <compare-section *ngFor="let section of sections" title={{section.title}}>
        <compare-field (valChanged)="onValChanged($event.value, field, section)" *ngFor="let field of section.fields" title="{{ field.title }}" multiplier="{{ field.multiplier }}" [(value)]="field.value"></compare-field>
      </compare-section>
    </form>
  `,
  styles: []
})
export class LengthScreenComponent implements OnInit {

  public sections: object[];

  @Input() public visible: boolean;

  constructor() { }

  ngOnInit() {

    let metric = { 
      title: "Metric",
      fields: [
        new Field("Micrometers (\u03BCm)", 1000000),
        new Field("Millimeters (mm)", 1000),
        new Field("Centimeters (cm)", 100),
        new Field("Meters (m)", 1),
        new Field("Kilometers (km)", 0.001)
      ]
    };

    let imperial = {
      title: "Imperial",
      fields: [
        new Field("Inches (in)", 63360),
        new Field("Feet (ft)", 5280),
        new Field("Yards (yd)", 1760),
        new Field("Miles (mi)", 1),
      ]
    };
    
    let light = {
      title: "Light",
      fields: [
        new Field("Light seconds", 31557600),
        new Field("Light minutes", 525960),
        new Field("Light years", 1)
      ]
    };

    this.sections = [metric, imperial, light];
  }

  getDisplay() {
    return this.visible ? "block" : "none";
  }

  onValChanged(value, field, section) {

    console.log(value);
    console.log(field);
    console.log(section);

    field.value = value;

    let baseField = section.fields.find(x => x.multiplier === 1);

    if (field !== baseField) {
      baseField.value = field.value / field.multiplier;
    }

    section.fields.forEach(f => {
      if (f === baseField || f === field) {
        return;
      }
      f.value = baseField.value * f.multiplier;
    });
    
  }

}
/*
<section id="metric" data-multiplier-miles="1609.344" data-multiplier-light-years="9460730472580800">
<section id="imperial" data-multiplier-meters="0.000621371192237334" data-multiplier-light-years="5878625373183.61">
<section id="light"  data-multiplier-miles="1.70108e-13" data-multiplier-meters="1.0570008340246154e-16">
*/