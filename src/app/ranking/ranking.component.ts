import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
	private url: string = "http://160.251.20.191/HoshideCompany/AIbattle/ranking";

	constructor() { }

	ngOnInit(): void {
	}

}
