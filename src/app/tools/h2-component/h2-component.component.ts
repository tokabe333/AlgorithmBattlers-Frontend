import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-h2-component',
	templateUrl: './h2-component.component.html',
	styleUrls: ['./h2-component.component.scss']
})
export class H2ComponentComponent implements OnInit {
	@Input() h2text!: string;
	constructor() { }

	ngOnInit(): void {
	}

	init(text: string): void {
		this.h2text = text;
	}
}
