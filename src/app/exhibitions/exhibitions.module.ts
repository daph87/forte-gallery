import { NgModule } from '@angular/core';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ExhibitionCardComponent } from './exhibition-card/exhibition-card.component';
import { SharedModule } from '../global';
import { StoreModule } from '@ngrx/store';
import { exhibitionsReducer } from '../store/reducer';

@NgModule({
    declarations: [
        ExhibitionsComponent,
        ExhibitionCardComponent
    ],
    imports: [
        SharedModule,
        StoreModule.forFeature('exhibitions', exhibitionsReducer),
    ]
    ,
    exports: [
        ExhibitionsComponent,
        ExhibitionCardComponent
    ]
})
export class ExhibitionsModule {}