import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';
import { UnknownComponent } from './unknown/unknown.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'test' , component: TestComponent},
  { path: 'unknown', component: UnknownComponent },
  { path: 'lazy-users', loadChildren: () => import('./users/users/users.module').then(m => m.UsersModule) },
  // { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
