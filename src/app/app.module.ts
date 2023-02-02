import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp  } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { EnvironmentProducts } from 'src/environments/environment-products';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


var config ={
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  projectId: environment.firebase.projectId,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messagingSenderId
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    BrowserAnimationsModule,
    RouterModule,
    
    AngularFireModule.initializeApp(EnvironmentProducts.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
