import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "app/login/login-routing.module";
import { LoginComponent } from "app/login/component/login.component";

@NgModule({
    imports: [CommonModule, LoginRoutingModule],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule {

}