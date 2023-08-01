import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button class="btn" (click)="increaseBy(+1)">+1</button>
        <button class="btn" (click)="resetCounter()">Reset</button>
        <button class="btn" (click)="increaseBy(-1)">-1</button>
        <hr>
    `
})
export class CounterComponent{
    
    public counter: number = 10;

    constructor() {

    }

    increaseBy(value: number): void {
        this.counter += value;
    }

    resetCounter(): void {
        this.counter = 10;
    }

}