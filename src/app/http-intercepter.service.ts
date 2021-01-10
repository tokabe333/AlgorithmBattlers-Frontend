import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

	constructor(
		private tokenExtractor: HttpXsrfTokenExtractor
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headerName = "X-CSRFToken";
		const token = this.tokenExtractor.getToken() as string;

		if (token != null && !req.headers.has(headerName)) {
			req = req.clone({ headers: req.headers.set(headerName, token) });
		}
		return next.handle(req);
	}
}
