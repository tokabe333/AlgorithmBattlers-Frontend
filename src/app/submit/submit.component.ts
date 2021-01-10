import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { HeaderService } from '../header/header.service';
import { SubmitData } from './SubmitData';

@Component({
	selector: 'app-submit',
	templateUrl: './submit.component.html',
	styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
	public langList: string[] = ["C++", "python"];
	public dropdownSelected: string = "C++";
	public submitSource!: string;


	private url: string = "http://127.0.0.1:8888/users";
	declare PR: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private headerService: HeaderService,
		private http: HttpClient,
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

		this.http.post<SubmitData>(this.url, Data).pipe(catchError(this.handleError<SubmitData>("submit data"))).subscribe(() => { this.router.navigate(["ranking"]); });
		alert("submitted!");
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}
}
