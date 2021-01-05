import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubmitComponent } from './submit/submit.component';
import { RankingComponent } from './ranking/ranking.component';
import { TopPageComponent } from './top-page/top-page.component';
import { H2ComponentComponent } from './tools/h2-component/h2-component.component';
import { APIsComponent } from './apis/apis.component';
import { NgongoParkComponent } from './tools/ngongo-park/ngongo-park.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SubmitComponent,
		RankingComponent,
		TopPageComponent,
		H2ComponentComponent,
		APIsComponent,
		NgongoParkComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
