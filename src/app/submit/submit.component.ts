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

		let score = new ScoreData();
		this.userService.submitSource(Data).subscribe(() => { this.userService.getScore().subscribe(scores => score = scores); });
		alert(score.score);

		alert("submitted!");
	}
}
