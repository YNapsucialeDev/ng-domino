import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//general components
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'room' , component: RoomComponent, canActivate: [AuthGuard] },
	{ path: 'login' , component: LoginComponent },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
