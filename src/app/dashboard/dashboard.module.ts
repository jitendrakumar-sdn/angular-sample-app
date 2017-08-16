import { NgModule } from "@angular/core";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CustomerListingComponent } from "app/dashboard/components/listing.component";
import { DashboardRoutingModule } from "app/dashboard/dashboard-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [DashboardComponent, CustomerListingComponent],
    providers: []
})
export class DashboardModule {

}