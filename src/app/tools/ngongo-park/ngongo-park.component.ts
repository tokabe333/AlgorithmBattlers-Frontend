import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-ngongo-park',
	templateUrl: './ngongo-park.component.html',
	styleUrls: ['./ngongo-park.component.scss']
})
export class NgongoParkComponent implements OnInit {
	@Input() ngongotext!: string;
	constructor() { }

	ngOnInit(): void {
	}

}
