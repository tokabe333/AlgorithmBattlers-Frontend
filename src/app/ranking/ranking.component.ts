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

	constructor(
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.userService.getUsers().subscribe(users => this.users = users);
	}
}
