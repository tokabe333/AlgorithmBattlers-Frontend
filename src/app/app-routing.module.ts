import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingComponent } from './ranking/ranking.component';
import { SubmitComponent } from './submit/submit.component';
import { TopPageComponent } from './top-page/top-page.component';

const routes: Routes = [
	{ path: "", redirectTo: "/top-page", pathMatch: "full" },
	{ path: "top-page", component: TopPageComponent },
	{ path: "submit", component: SubmitComponent },
	{ path: "ranking", component: RankingComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
