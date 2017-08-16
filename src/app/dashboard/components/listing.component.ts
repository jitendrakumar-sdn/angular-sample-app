import { Component } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Customer } from "app/dashboard/models/customer";

@Component({
    selector: 'customer-listing',
    templateUrl: './listing.component.html',
    styles: []

})
export class CustomerListingComponent {
    constructor(private toastr: ToastrService) { }
    customers: Customer[] = [
        { id: 1, fname: "Alex", lname: "Doe", email: "alex@email.com", phone: "1234567890" },
        { id: 2, fname: "Jim", lname: "Copper", email: "jim@email.com", phone: "9898989765" },
        { id: 3, fname: "Andrew", lname: "Flintoff", email: "andrew@email.com", phone: "1231231235" }
    ];

    deleteCustomer(cId) {
        this.toastr.warning(`Record updated successfully - ${cId}`);
    }

    editCustomer(cId) {
        this.toastr.success(`Record updated successfully - ${cId}`)
    }
}