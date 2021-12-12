import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../model/auth.service";
import { User } from "../../model/user.model";

@Component({
    templateUrl: "forgotpwd.component.html"
})

export class ForgotPasswordComponent {
    public user: User = new User();
    public newPassowrd: string;
    public message: string;

    constructor(private router: Router, private auth: AuthService) { }

    forgotpwd(form: NgForm) {
        if (form.valid) {
            // Checks if the passwords match.
             this.newPassowrd = this.user.password;
            if(this.newPassowrd){
                this.router.navigateByUrl("/users/signin");
            }
    }
}
}