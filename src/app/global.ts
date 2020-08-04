import { NgModule } from '@angular/core';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// export const url = 'http://www.fortegallery.com:8000';
export const url = 'http://localhost:8080';

@NgModule({
    declarations: [
        LoadingPageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        HttpClientModule,
        NgbModalModule,
        FormsModule
    ],
    exports: [
        RouterModule,
        CommonModule,
        NgbModule,
        HttpClientModule,
        NgbModalModule,
        FormsModule,
        LoadingPageComponent
    ]
})
export class SharedModule {}
