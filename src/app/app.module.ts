import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubmitComponent } from './submit/submit.component';
import { RankingComponent } from './ranking/ranking.component';
import { TopPageComponent } from './top-page/top-page.component';
import { H2ComponentComponent } from './tools/h2-component/h2-component.component';
import { APIsComponent } from './apis/apis.component';
import { NgongoParkComponent } from './tools/ngongo-park/ngongo-park.component';

import { UserService } from "./user.service";
import { PrettyprintComponentComponent } from './tools/prettyprint-component/prettyprint-component.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SubmitComponent,
		RankingComponent,
		TopPageComponent,
		H2ComponentComponent,
		APIsComponent,
		NgongoParkComponent,
		PrettyprintComponentComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		HttpClientJsonpModule,
	],
	providers: [
		UserService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
