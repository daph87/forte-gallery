import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ExhibitionsComponent } from './exhibitions/exhibitions/exhibitions.component';
import { ExhibitionCardComponent } from './exhibitions/exhibition-card/exhibition-card.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
  { path: 'forte_great_admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: 'publications', loadChildren: './publications/publications.module#PublicationModule' },
  { path: 'info', loadChildren: './info/info.module#InfoModule' },
  { path: 'exhibitions', component: ExhibitionsComponent },
  {path: 'contact-us', component: ContactUsComponent },
  { path: 'exhibitions/:exhibition', component: ExhibitionCardComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
