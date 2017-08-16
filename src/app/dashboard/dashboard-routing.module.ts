import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { CustomerListingComponent } from "app/dashboard/components/listing.component";

const routes: Routes = [
    {
        path: ''
        , component: DashboardComponent
        , children: [
            { path: '', component: CustomerListingComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}