import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "movies", component: MoviesComponent },
  { path: "tv", component: TvComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  {path:"moviedetails/:id", component:MoviedetailsComponent},
  { path: "contacts", component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
