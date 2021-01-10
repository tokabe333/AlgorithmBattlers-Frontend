import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { HeaderService } from '../header/header.service';
import { UserService } from '../user.service';
import { ScoreData, SubmitData } from './SubmitData';

@Component({
	selector: 'app-submit',
	templateUrl: './submit.component.html',
	styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
	public langList: string[] = ["C++", "python"];
	public dropdownSelected: string = "C++";
	public submitSource!: string;

	private scoreData!: ScoreData;

	declare PR: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private headerService: HeaderService,
		private http: HttpClient,
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.headerService.setMidasi("submit")

		this.PR = require("../../prettify.js");

	}

	onChange(): void {
	}

	onSubmit(form: any): void {
		let Data: SubmitData = {
			language: form.languages,
			sources: form.sources,
		}

		//this.userService.submitSource(Data).toPromise().then(() => this.userService.getScore().subscribe(scores => { this.scoreData = scores; alert(scores); }));
		this.userService.sumbmitAndGetScore(Data).subscribe(ngo => alert(ngo));
		alert(this.scoreData);
		alert(this.scoreData.score);

		alert("submitted!");
	}
}
