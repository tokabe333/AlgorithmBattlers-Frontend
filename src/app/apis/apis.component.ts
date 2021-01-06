import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

import { HeaderService } from '../header/header.service';
import { PrettyprintComponentComponent } from '../tools/prettyprint-component/prettyprint-component.component';
import { H2ComponentComponent } from '../tools/h2-component/h2-component.component';
import { IAPIs, APICodes, LangList } from './api_codes';

@Component({
	selector: 'app-apis',
	templateUrl: './apis.component.html',
	styleUrls: ['./apis.component.scss']
})
export class APIsComponent implements OnInit {
	public apiCodes!: { [key: string]: IAPIs };
	public langList!: string[];

	public dropdownSelected: string = "C++";

	prettyPrintComponent!: ComponentFactory<PrettyprintComponentComponent>;
	h2Component!: ComponentFactory<H2ComponentComponent>;

	@ViewChild("codes", { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

	constructor(
		private headerService: HeaderService,
		private resolver: ComponentFactoryResolver
	) { }

	ngOnInit(): void {
		this.headerService.setMidasi("apis");
		this.apiCodes = APICodes;
		this.langList = LangList;

		this.prettyPrintComponent = this.resolver.resolveComponentFactory(PrettyprintComponentComponent);
		this.h2Component = this.resolver.resolveComponentFactory(H2ComponentComponent);
	}

	onChange(): void {
		const h2_1 = this.viewContainerRef.createComponent(this.h2Component);
		h2_1.instance.h2text = "Board Data Getter!";

		const code_1 = this.viewContainerRef.createComponent(this.prettyPrintComponent);
		code_1.instance.lang = this.dropdownSelected;
		code_1.instance.apiList = 1;


	}
}
