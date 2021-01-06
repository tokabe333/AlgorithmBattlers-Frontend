import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef } from '@angular/core';

import { HeaderService } from '../header/header.service';
import { PrettyprintComponentComponent } from '../tools/prettyprint-component/prettyprint-component.component';
import { H2ComponentComponent } from '../tools/h2-component/h2-component.component';
import { IAPIs, APICodes, LangList } from './api_codes';

@Component({
	selector: 'app-apis',
	templateUrl: './apis.component.html',
	styleUrls: ['./apis.component.scss']
})
export class APIsComponent implements OnInit, AfterViewInit {
	public apiCodes!: { [key: string]: IAPIs };
	public langList!: string[];

	public dropdownSelected: string = "C++";

	prettyPrintComponent!: ComponentFactory<PrettyprintComponentComponent>;
	h2Component!: ComponentFactory<H2ComponentComponent>;
	@ViewChild("codes", { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

	h2_1!: ComponentRef<H2ComponentComponent>;

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

	}

	onChange(): void {
		this.h2_1 = this.viewContainerRef.createComponent(this.h2Component);
		setTimeout(() => { this.h2_1.instance.h2text = "Board Data Getter!"; });


		const code_1 = this.viewContainerRef.createComponent(this.prettyPrintComponent);
		code_1.instance.lang = this.dropdownSelected;
		code_1.instance.apiList = 1;

	}

	ngAfterViewInit() {
		this.onChange();
	}
}
