import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './routeGuards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './routeGuards/admin.guard';
import { FormComponent } from './components/form/form.component';
import { FormConfirmGuard } from './routeGuards/confirm.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        component: HomeComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [FormConfirmGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
