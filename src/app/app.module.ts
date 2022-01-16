import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { FormComponent } from './components/form/form.component';
import { AllDataComponent } from './components/alldata/alldata.component';

import { AuthService } from './providers/auth.service';
import { LoginComponent } from './components/login/login.component';
import { GamepageComponent } from './components/gamepage/gamepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from './auth.service';
import { ResetpwComponent } from './components/reset-pw/reset-pw.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Starcraft2Component } from './components/starcraft2/starcraft2.component';
import { Left4dead2Component } from './components/left4dead2/left4dead2.component';
import { BloodborneComponent } from './components/bloodborne/bloodborne.component';


export const firebaseConfig = {
  apiKey: "AIzaSyAU7D1TYxicVWfi9hQ1W37twauGLIdw3rw",
  authDomain: "projectuwo-be26e.firebaseapp.com",
  databaseURL: "https://projectuwo-be26e.firebaseio.com",
  storageBucket: "projectuwo-be26e.appspot.com",
  messagingSenderId: "699217748327"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path:'edit-listing/:id', component:EditListingComponent},
  
 { path:"allData", component:AllDataComponent },
 { path:"form", component:FormComponent},
 
 { path: '', redirectTo: '/form', pathMatch: 'full' },
 
 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'gamepage', component: GamepageComponent },
 
 { path: 'reset-pw', component: ResetpwComponent },
 
  { path: 'left4dead2', component: Left4dead2Component },
 { path: 'starcraft2', component: Starcraft2Component },
 { path: 'bloodborne', component: BloodborneComponent },

 
 { path: '', redirectTo: '/sendData', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    
    FormComponent,
    AllDataComponent,
    
    GamepageComponent,
    
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,
    ResetpwComponent,
    ProfileComponent,
    Starcraft2Component,
    Left4dead2Component,
    BloodborneComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService,HttpService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
