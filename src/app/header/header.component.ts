import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from './header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor(private router: Router,
		public headerService: HeaderService
	) { }

	ngOnInit(): void {
		this.headerService.setMidasi("top-page");
	}

	// linksOnclick(page: string): void {
	// 	this.nowMidasi = this.midasi[page];
	// 	this.router.navigate([page]);
	// }

}
