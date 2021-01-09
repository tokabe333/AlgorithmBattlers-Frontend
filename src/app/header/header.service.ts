import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HeaderService {
	public nowMidasi!: string;
	public midasi: { [key: string]: string; } = {
		"apis": "Utility APIs Overview!",
		"submit": "Submit Page Here!",
		"ranking": "Tsuyo Tsuyo Ojisan Ranking!",
		"top-page": "Welcome to NgoNgoPark!",
	};

	constructor() { }


	setMidasi(page: string): void {
		this.nowMidasi = this.midasi[page];
	}
}
