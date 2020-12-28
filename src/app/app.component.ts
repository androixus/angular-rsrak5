import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h3>
            Change detection is triggered at:
            <span [textContent]="time | date:'hh:mm:ss:SSS'"></span>
        </h3>
        <button class="btn btn-primary" (click)="0">Trigger Change Detection</button>
    `
})
export class AppComponent {
    get time() {
        return Date.now();
    }
}
