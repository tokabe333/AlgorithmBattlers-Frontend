import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { IAPIs, APICodes, LangList } from '../../apis/api_codes';

@Component({
	selector: 'app-prettyprint-component',
	templateUrl: './prettyprint-component.component.html',
	styleUrls: ['./prettyprint-component.component.scss']
})
export class PrettyprintComponentComponent implements OnInit {
	@Input() lang!: string;
	@Input() apiList!: number;

	public apiCodes!: { [key: string]: IAPIs };
	public codeData!: string;

	constructor(
		private changeDetectorRef: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this.apiCodes = APICodes;
		if (this.apiList == 1) { this.codeData = this.apiCodes[this.lang].getData; }
		else if (this.apiList == 2) { this.codeData = this.apiCodes[this.lang].postData; }
	}

	public redraw() {
		this.changeDetectorRef.detectChanges();
	}

}
