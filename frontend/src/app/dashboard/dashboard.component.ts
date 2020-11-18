import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	free: number = 0;
	size: number = 0;
	percent: number = 55;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get('/size').subscribe((response: any) => {
			const { free, size } = response;
			const used = size - free;
			const percent = +((used / size) * 100).toFixed(0);
			const GB = 1073741824;

			this.free = +(parseInt(free) / GB).toFixed(2);
			this.size = +(parseInt(size) / GB).toFixed(2);;
			this.percent = percent;
		});
	}

}
