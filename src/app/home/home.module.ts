import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from '../global';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        CarouselComponent,
    ],
    imports: [
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}