import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

const routes: Routes = [
    { path: "",  component: ArtistsComponent },
    { path: ":fullName", component: ArtistDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistsRoutingModule {}