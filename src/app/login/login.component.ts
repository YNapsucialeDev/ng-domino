import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
	//login button toggle
	public form_valid: boolean = false;
	public login_error: boolean = false;

	//form controls
	public usuario: FormControl = new FormControl('', Validators.required);
	public contrasena: FormControl = new FormControl('', Validators.required);

	public login_form: FormGroup = new FormGroup({
		usuario: this.usuario,
		contrasena: this.contrasena
	});

	constructor(public router: Router) 
	{

	}

	ngOnInit() 
	{
		
	}

	public validar_form(keycode)
	{
		if(this.login_form.valid)
		{
			this.form_valid = true;
			if(keycode == 13)
			{
				this.login();
			}
		}
		else
		{
			this.form_valid = false;
		}
	}

	public login()
	{
		let form: Object = this.login_form.getRawValue();

		//helpers para verificar contraseña
		let login_result: boolean = this.verificar_password(form);

		if(login_result == true)
		{
			window.localStorage.setItem('usuario', form['usuario']);
			this.router.navigate(['/home']);
		}
		else
		{
			this.login_error = true;
			setTimeout(() => {
				this.login_error = false;
			}, 2000);
		}
	}

	public verificar_password(form): boolean
	{
		if(form['usuario'] == 'cesar' && form['contrasena'] == 'passwordsmustbeatleastthislength')
		{
			return true;
		}
		else if(form['usuario'] == 'mauro' && form['contrasena'] == 'passwordsmustbeatleastthislength')
		{
			return true;
		}
		else if(form['usuario'] == 'rios' && form['contrasena'] == 'passwordsmustbeatleastthislength')
		{
			return true;
		}
		else if(form['usuario'] == 'berna' && form['contrasena'] == 'inspire1')
		{
			return true;
		}
		else if(form['usuario'] == 'frank' && form['contrasena'] == 'passwordsmustbeatleastthislength')
		{
			return true;
		}
		else if(form['usuario'] == 'kike' && form['contrasena'] == 'passwordsmustbeatleastthislength')
		{
			return true;
		}
		else if(form['usuario'] == 'tona' && form['contrasena'] == 'inspire1')
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}