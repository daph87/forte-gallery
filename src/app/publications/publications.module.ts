import { NgModule } from '@angular/core';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationCardComponent } from './publication-card/publication-card.component';
import { SharedModule } from '../global';
import { StoreModule } from '@ngrx/store';
import { publicationsReducer } from '../store/reducer';
import { PublicationsRoutingModule } from './publications-routing.module';

@NgModule({
    declarations: [
        PublicationsComponent,
        PublicationCardComponent
    ],
    imports: [
        SharedModule,
        StoreModule.forFeature('publications', publicationsReducer),
        PublicationsRoutingModule
    ]
})
export class PublicationModule {}