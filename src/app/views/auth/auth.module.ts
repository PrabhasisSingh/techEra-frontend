import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../model/model.module";
import { PartialsModule } from '../partials/partials.module';
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { ForgotPasswordComponent } from "./forgotpwd.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule],
    declarations: [SignInComponent, SignUpComponent,ForgotPasswordComponent],
    exports : [SignInComponent, SignUpComponent,ForgotPasswordComponent]
})

export class AuthModule {}