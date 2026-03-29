import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/login/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' }),
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
