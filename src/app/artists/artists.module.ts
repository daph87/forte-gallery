import { NgModule } from "@angular/core";
import { SharedModule } from '../global';
import { StoreModule } from '@ngrx/store';
import { artistsReducer } from '../store/reducer';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistsRoutingModule } from './artists-routing.module';

@NgModule({
    declarations: [
        ArtistsComponent,
        ArtistDetailsComponent
    ],
    imports: [
        SharedModule,
        StoreModule.forFeature('artists', artistsReducer),
        ArtistsRoutingModule
    ]
})
export class ArtistsModule {}