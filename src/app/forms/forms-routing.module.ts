import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from "app/forms/forms.component";
import { TemplateFormComponent } from "app/forms/components/template-forms/template-form.component";
import { ReactiveFormComponent } from "app/forms/components/reactive-forms/reactive-form.component";


const routes: Routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            { path: '', component: TemplateFormComponent },
            { path: 'reactive-form', component: ReactiveFormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule {

}