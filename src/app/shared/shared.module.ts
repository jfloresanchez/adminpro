import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NopagefoundComponent } from '../nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent
    ]
})

export class SharedModule { }

