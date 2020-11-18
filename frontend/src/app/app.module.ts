import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./login/login.module").then((m) => m.LoginModule),
	},
	{
		path: "",
		pathMatch: "full",
		redirectTo: "",
	},
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),

		DashboardModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
