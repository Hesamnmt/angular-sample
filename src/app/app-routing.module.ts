import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';
import { UnknownComponent } from './unknown/unknown.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'test' , component: TestComponent},
  { path: 'unknown', component: UnknownComponent },
  // { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
