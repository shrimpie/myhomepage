import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AuthGuard } from './guards/auth.guard';
import { BlogCenterComponent } from './components/blogs/blog-center/blog-center.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blogs/blog-detail/blog-detail.component';


const appRoutes: Routes =  [
  { path:'', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path:'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path:'blogapi/blogs', component: BlogCenterComponent, canActivate: [AuthGuard] }
]

@NgModule({
  // declarations are to make directives (including components and pipes) from
  // the current module available to other directives in the current module.
  // Selectors of directives, components or pipes are only matched against the
  // HTML if they are declared or imported.
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    BlogCenterComponent,
    BlogListComponent,
    BlogDetailComponent
  ],
  // imports makes the exported declarations of other modules available in the
  // current module
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // The forRoot static method is a convention that makes it easy for
    // developers to configure the module's providers. The RouterModule.forRoot
    // method is a good example. Apps pass a Routes object to
    // RouterModule.forRoot in order to configure the app-wide Router service
    // with routes. RouterModule.forRoot returns a ModuleWithProviders.
    // You add that result to the imports list of the root AppModule.
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  // providers are to make services and values known to DI. They are added to
  // the root scope and they are injected to other services or directives that
  // have them as dependency.
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
