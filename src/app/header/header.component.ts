import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public nowMidasi: string = "Welcome to NgoNgoPark";

	private midasi: { [key: string]: string; } = {
		"apis": "Utility APIs over view!",
		"submit": "Submit Page Here!",
		"ranking": "Tsuyo Tsuyo Ojisan Ranking!",
		"top-page": "Welcome to NgoNgoPark!",
	};

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	linksOnclick(page: string): void {
		this.nowMidasi = this.midasi[page];
		this.router.navigate([page]);
	}

}
