import { Component, OnInit } from '@angular/core';

import { User } from '../User';
import { UserService } from '../user.service';
import { HeaderService } from '../header/header.service';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
	public users!: User[]
	public rankingUrl!: string;

	constructor(
		private userService: UserService,
		private headerService: HeaderService
	) { }

	ngOnInit(): void {
		this.getHeroes();
		this.rankingUrl = this.userService.url;

		this.headerService.setMidasi("ranking");
	}

	getHeroes(): void {
		this.userService.getUsers().subscribe(users => this.users = users);
	}
}
