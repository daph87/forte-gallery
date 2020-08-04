import { NgModule } from '@angular/core';
import { SharedModule } from '../global';
import { EventsComponent } from './events/events.component';
import { EventCardComponent } from './event-card/event-card.component';
import { StoreModule } from '@ngrx/store';
import { eventsReducer } from '../store/reducer';
import { EventsRoutingModule } from './event-routing.module';

@NgModule({
    declarations: [
        EventsComponent,
        EventCardComponent
    ],
    imports: [
        SharedModule,
        StoreModule.forFeature('events', eventsReducer),
        EventsRoutingModule
    ]
})
export class EventsModule {}