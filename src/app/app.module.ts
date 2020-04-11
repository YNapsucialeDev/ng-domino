import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


//EXTERNAL DEPENDENCIES
import { MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


//SERVICES
import { SocketService } from './socket.service';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		RoomComponent,
		LoginComponent,
		NavComponent
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
		SocketService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
