import { Component } from '@angular/core';

const SELECTOR: string = "app-root";

const TEMPLATE: string = `
<toolbar (onShowLength)="showLength()"></toolbar>
<length-screen [visible]="lengthVisible"></length-screen>
`;

const STYLES: string = "";

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class AppComponent {
    
    public lengthVisible: boolean = false;
    
    showLength() {
        console.log("showLength");
        this.lengthVisible = true;
    }
    
}
