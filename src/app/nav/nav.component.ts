import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit
{
	public isMenuClose: boolean = false;
	public player: string = '';

	constructor(public router: Router)
	{

	}

	ngOnInit()
	{
		this.player = window.localStorage.getItem('usuario').toUpperCase();
	}

	onToolbarMenuToogle(): void 
	{
		this.isMenuClose = !this.isMenuClose;
	}

	navigate(ruta)
	{
		this.router.navigate(ruta);
	}

	cerrarSesion()
	{
		window.localStorage.clear();
		this.router.navigate(['/login']);
		window.location.reload();
	}

	goToRoom()
	{
		this.router.navigate(['/home']);
	}
}