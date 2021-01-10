import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

import { HeaderService } from '../header/header.service';

@Component({
	selector: 'app-submit',
	templateUrl: './submit.component.html',
	styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
	public langList: string[] = ["C++", "python"];
	public dropdownSelected: string = "C++";

	declare PR: any;

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit(): void {
		this.headerService.setMidasi("submit")

		this.PR = require("../../prettify.js");
	}

	onChange(): void {

	}
}
