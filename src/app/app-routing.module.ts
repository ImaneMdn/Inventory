import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ChefequipeComponent } from './chefequipe/chefequipe.component';
import { ChefuniteComponent } from './chefunite/chefunite.component';
import { ChefcentreComponent } from './chefcentre/chefcentre.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavvComponent } from './sidenavv/sidenavv.component';
import { SignupComponent } from './signup/signup.component';
import { CentreComponent } from './centre/centre.component';
import { UniteComponent } from './unite/unite.component';
import { LocaliteComponent } from './localite/localite.component';
import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin/admin.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent},
  {path: 'sidenavv' , component:SidenavvComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'charts',  component: ChartsComponent },
      { path: 'chefunite',  component: ChefuniteComponent },
      { path: 'chefequipe',  component: ChefequipeComponent },
      { path: 'chefcentre', component: ChefcentreComponent},
      { path: 'centre', component: CentreComponent},
      { path: 'unite', component: UniteComponent},
      { path: 'localite', component: LocaliteComponent},
      { path: 'settings', component: SettingComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
