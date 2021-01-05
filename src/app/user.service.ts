import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './User';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	//private url: string = "http://160.251.20.191/HoshideCompany/AIbattle/ranking";
	private url: string = "http://localhost:8888/users"
	constructor(
		private http: HttpClient
	) { }

	public getUsers(): Observable<User[]> {
		return this.http.get<User[]>(`${this.url}`).pipe(catchError(this.handleError(`getUsers`, [])));
	}

	private handleError<T>(operation = "operation", result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}
}
