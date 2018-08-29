import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './shared/services/user.service';
import { UserListComponent } from './user-list/user-list.component';


const appRoutes: Routes = [
  { path: 'validation/userList', component: UserListComponent },
  { path: 'validation/register',component: RegisterComponent },
  {
    path: 'validation/',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
