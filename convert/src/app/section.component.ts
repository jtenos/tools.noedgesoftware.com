import { Component, Output, EventEmitter } from '@angular/core';

const SELECTOR: string = "compare-section";

const TEMPLATE: string = `
    <section>
        <ng-content></ng-content>
    </section>
    <mat-divider></mat-divider>
`;

const STYLES: string = `
    section {
        margin-top: 10px;
    }
`;

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class SectionComponent {

}
