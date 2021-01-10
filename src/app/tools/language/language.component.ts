import { Component, OnInit } from '@angular/core';

import { IAPIs, APICodes, LangList } from '../../apis/api_codes';

@Component({
	selector: 'app-language',
	templateUrl: './language.component.html',
	styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
	public apiCodes!: { [key: string]: IAPIs };
	public langList!: string[];

	public dropdownSelected: string = "C++";
	constructor() { }

	ngOnInit(): void {
	}

	onChange(): void {

	}

}
