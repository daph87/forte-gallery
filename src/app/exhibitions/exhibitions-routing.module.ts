import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ExhibitionCardComponent } from './exhibition-card/exhibition-card.component';

const routes: Routes = [
    { path: "", component: ExhibitionsComponent },
    // { path: ":exhibition", component: ExhibitionCardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExhibitionsRoutingModule {}