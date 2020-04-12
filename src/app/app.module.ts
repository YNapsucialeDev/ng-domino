import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

//EXTERNAL DEPENDENCIES
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		NavComponent,
		RoomComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule,
		SocketIoModule.forRoot(config),
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	providers: [
		
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
