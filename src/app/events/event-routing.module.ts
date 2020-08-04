import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { EventCardComponent } from './event-card/event-card.component';

const routes: Routes = [
    { path: "", component: EventsComponent },
    { path: ":event", component: EventCardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]  
})
export class EventsRoutingModule {}