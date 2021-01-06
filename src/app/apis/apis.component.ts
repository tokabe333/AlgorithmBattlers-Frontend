import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, AfterViewInit, AfterViewChecked, ComponentRef } from '@angular/core';

import { HeaderService } from '../header/header.service';
import { PrettyprintComponentComponent } from '../tools/prettyprint-component/prettyprint-component.component';
import { H2ComponentComponent } from '../tools/h2-component/h2-component.component';
import { IAPIs, APICodes, LangList } from './api_codes';
import { $ } from 'protractor';

@Component({
	selector: 'app-apis',
	templateUrl: './apis.component.html',
	styleUrls: ['./apis.component.scss']
})
export class APIsComponent implements OnInit, AfterViewInit, AfterViewChecked {
	public apiCodes!: { [key: string]: IAPIs };
	public langList!: string[];

	public dropdownSelected: string = "C++";

	prettyPrintComponent!: ComponentFactory<PrettyprintComponentComponent>;
	h2Component!: ComponentFactory<H2ComponentComponent>;
	@ViewChild("codes", { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

	h2_1!: ComponentRef<H2ComponentComponent>;
	h2_2!: ComponentRef<H2ComponentComponent>;
	code_1!: ComponentRef<PrettyprintComponentComponent>;
	code_2!: ComponentRef<PrettyprintComponentComponent>;

	declare PR: any;

	constructor(
		private headerService: HeaderService,
		private resolver: ComponentFactoryResolver
	) {
	}

	ngOnInit(): void {
		this.headerService.setMidasi("apis");
		this.apiCodes = APICodes;
		this.langList = LangList;

		this.prettyPrintComponent = this.resolver.resolveComponentFactory(PrettyprintComponentComponent);
		this.h2Component = this.resolver.resolveComponentFactory(H2ComponentComponent);
		this.PR = require("../../prettify.js");
	}

	ngAfterViewInit() {
		this.generate();
	}

	ngAfterViewChecked() {
		this.applyPretty();
	}

	onChange(): void {
		this.generate();
	}

	applyPretty(): void {
		this.PR.prettyPrint();
		//console.log(this.PR.prettyPrint);
	}


	generate(): Promise<void> {
		if (this.h2_1 != undefined) { this.h2_1.destroy(); }
		if (this.h2_2 != undefined) { this.h2_2.destroy(); }
		if (this.code_1 != undefined) { this.code_1.destroy(); }
		if (this.code_2 != undefined) { this.code_2.destroy(); }

		return new Promise(() => {
			setTimeout(() => {
				this.h2_1 = this.viewContainerRef.createComponent(this.h2Component);
				this.h2_1.instance.h2text = "Board Data Getter!";

				this.code_1 = this.viewContainerRef.createComponent(this.prettyPrintComponent);
				this.code_1.instance.lang = this.dropdownSelected;
				this.code_1.instance.apiList = 1;

				this.h2_2 = this.viewContainerRef.createComponent(this.h2Component);
				this.h2_2.instance.h2text = "Board Data Poster!";

				this.code_2 = this.viewContainerRef.createComponent(this.prettyPrintComponent);
				this.code_2.instance.lang = this.dropdownSelected;
				this.code_2.instance.apiList = 2;
			});
		});
	}


}
