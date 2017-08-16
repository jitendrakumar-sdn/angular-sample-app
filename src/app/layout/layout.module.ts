import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "app/layout/layout-routing.module";
import { LayoutComponent } from "app/layout/layout.component";
import { HeaderComponent } from "app/layout/components/header/header.component";
import { SidebarComponent } from "app/layout/components/aside/aside.component";
import { RouterModule } from "@angular/router";
import { MyFormModule } from "app/forms/forms.module";

@NgModule({
    imports: [CommonModule,RouterModule,  LayoutRoutingModule,  MyFormModule],
    declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
    providers: []
})
export class LayoutModule {

}