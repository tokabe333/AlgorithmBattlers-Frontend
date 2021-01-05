import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubmitComponent } from './submit/submit.component';
import { RankingComponent } from './ranking/ranking.component';
import { TopPageComponent } from './top-page/top-page.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SubmitComponent,
		RankingComponent,
		TopPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
