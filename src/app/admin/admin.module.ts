import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SharedModule } from '../global';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/reducer';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        AdminComponent,
        AdminPanelComponent
    ],
    imports: [
        SharedModule,
        StoreModule.forFeature('adminState', userReducer),
        AdminRoutingModule
    ]
})
export class AdminModule {}