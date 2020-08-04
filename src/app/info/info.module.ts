import { NgModule } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { SharedModule } from '../global';
import { InfoRoutingModule } from './info-routing.module';

@NgModule({
    declarations: [
        InfoComponent
    ],
    imports: [
        SharedModule,
        InfoRoutingModule
    ]
})
export class InfoModule {}