import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
	selector: 'app-top-page',
	templateUrl: './top-page.component.html',
	styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit(): void {
		this.headerService.setMidasi("top-page");
	}

}
