import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
	selector: 'app-apis',
	templateUrl: './apis.component.html',
	styleUrls: ['./apis.component.scss']
})
export class APIsComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit(): void {
		this.headerService.setMidasi("apis");
	}

}
