import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllblogComponent } from './pages/allblog/allblog.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MyblogComponent } from './pages/myblog/myblog.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent,
  },

  {
    path:'myblog',
    component:MyblogComponent,
  },

  {
    path:'allblog',
    component:AllblogComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },

  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'logout',
    component:LogoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
