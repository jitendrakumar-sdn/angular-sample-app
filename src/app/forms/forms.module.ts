import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";
import { FormsRoutingModule } from "app/forms/forms-routing.module";
import { FormsComponent } from "app/forms/forms.component";
import { TemplateFormComponent } from "app/forms/components/template-forms/template-form.component";
import { ReactiveFormComponent } from "app/forms/components/reactive-forms/reactive-form.component";
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),        
        MyDatePickerModule,
        FormsRoutingModule
    ],
    declarations: [
        FormsComponent,
        TemplateFormComponent,
        ReactiveFormComponent
    ],
    providers: []
})
export class MyFormModule {

}