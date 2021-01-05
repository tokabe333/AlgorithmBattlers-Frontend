import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
	selector: 'app-submit',
	templateUrl: './submit.component.html',
	styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit(): void {
		this.headerService.setMidasi("submit")
	}

}
