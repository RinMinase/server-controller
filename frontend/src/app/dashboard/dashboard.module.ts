import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path: "",
			component: DashboardComponent,
		}]),
		HttpClientModule,
	]
})
export class DashboardModule { }
