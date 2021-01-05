import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingComponent } from './ranking/ranking.component';
import { SubmitComponent } from './submit/submit.component';
import { TopPageComponent } from './top-page/top-page.component';
import { APIsComponent } from "./apis/apis.component";

const routes: Routes = [
	{ path: "", redirectTo: "/top-page", pathMatch: "full" },
	{ path: "HoshideCompany/AIbattle/unchi", redirectTo: "/top-page", pathMatch: "full" },
	{ path: "apis", component: APIsComponent },
	{ path: "top-page", component: TopPageComponent },
	{ path: "submit", component: SubmitComponent },
	{ path: "ranking", component: RankingComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
