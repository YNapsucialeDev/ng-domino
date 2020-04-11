import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{

	previousUrl: string;
	constructor(router: Router) 
	{
		router.events
			.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
			.subscribe((events: RoutesRecognized[]) => {
			this.previousUrl = events[0].urlAfterRedirects;
			if(this.previousUrl == '/room')
			{
				window.location.replace('/home');
			}
		});
	}

	ngOnInit() 
	{
		
	}
}
