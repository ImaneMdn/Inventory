import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ChefuniteComponent } from './chefunite/chefunite.component';
import { ChefcentreComponent } from './chefcentre/chefcentre.component';
import { ChefequipeComponent } from './chefequipe/chefequipe.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { ToastrModule} from 'ngx-toastr';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavvComponent } from './sidenavv/sidenavv.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgScrollbarModule} from 'ngx-scrollbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UniteComponent } from './unite/unite.component';
import { CentreComponent } from './centre/centre.component';
import { LocaliteComponent } from './localite/localite.component';
import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin/admin.component';
import { MatButtonModule } from '@angular/material/button';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForbiddenComponent,
    ChefuniteComponent,
    ChefcentreComponent,
    ChefequipeComponent,
    HeaderComponent,
    SidenavvComponent,
    SignupComponent,
    UniteComponent,
    CentreComponent,
    LocaliteComponent,
    SettingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    NgxPaginationModule,
    NgScrollbarModule,
    MatPaginatorModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    ToastrModule
    
   
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
