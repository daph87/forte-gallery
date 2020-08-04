import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers } from './store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ArtistsModule } from './artists/artists.module';
import { HomeModule } from './home/home.module';
import { ExhibitionsModule } from './exhibitions/exhibitions.module';
import { InfoModule } from './info/info.module';
import { AdminModule } from './admin/admin.module';
import { PublicationModule } from './publications/publications.module';
import { EventsModule } from './events/events.module';
import { ExhibitionsComponent } from './exhibitions/exhibitions/exhibitions.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    HomeModule,
    ArtistsModule,
    EventsModule,
    ExhibitionsModule,
    InfoModule,
    PublicationModule,
    AdminModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }


