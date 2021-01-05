import { Component, OnInit } from '@angular/core';

import { User } from '../User';
import { UserService } from '../user.service';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
	public users!: User[]
	public rankingUrl!: string;

	constructor(
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.getHeroes();
		this.rankingUrl = this.userService.url;
	}

	getHeroes(): void {
		this.userService.getUsers().subscribe(users => this.users = users);
	}
}
