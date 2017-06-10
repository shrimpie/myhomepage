import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { SocketService } from './services/socket.service';
import { MessageService } from './services/message.service';
import { BlogService } from './services/blog.service';
import { Broadcaster } from './services/broadcast.service';


import { FlashMessagesModule } from 'angular2-flash-messages';

import { AuthGuard } from './guards/auth.guard';
import { BlogCenterComponent } from './components/blogs/blog-center/blog-center.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blogs/blog-detail/blog-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat/chat.component';
import { ChatInputComponent } from './components/chat/chat-input/chat-input.component';
import { ChatListComponent } from './components/chat/chat-list/chat-list.component';
import { OnlineUsersComponent } from './components/chat/online-users/online-users.component';


const appRoutes: Routes =  [
  { path:'', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path:'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path:'blogs', component: BlogCenterComponent, canActivate: [AuthGuard] },
  { path:'chat', component: ChatComponent, canActivate: [AuthGuard] }
]

@NgModule({
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
    BlogDetailComponent,
    FooterComponent,
    ChatComponent,
    ChatInputComponent,
    ChatListComponent,
    OnlineUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, SocketService, BlogService,
    Broadcaster, MessageService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
