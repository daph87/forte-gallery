import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationCardComponent } from './publication-card/publication-card.component';

const routes: Routes = [
    { path: "", component: PublicationsComponent },
    { path: ":publication", component: PublicationCardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicationsRoutingModule {}