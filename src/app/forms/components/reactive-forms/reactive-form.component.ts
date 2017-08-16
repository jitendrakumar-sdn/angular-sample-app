import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'reactive-form',
    templateUrl: 'reactive-form.component.html'
})
export class ReactiveFormComponent {
    reactiveForm: FormGroup;
    constructor(private router: Router, private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.reactiveForm = this.fb.group({
            firstName   : ['', Validators.required],
            lastName    : ['', Validators.required],
            birthDate   : ['', Validators.required]
        });
    }

    gotoTemplateForm() {
        this.router.navigate(['/forms']);
    }
}