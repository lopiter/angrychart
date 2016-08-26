import {Component , Input} from "@angular/core";
import {ContactModel , ContactFieldType} from "./model";

@Component({
    selector: "contact-section",
    template: `
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Contact Me</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                    <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row control-group" *ngFor="let field of fields;">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>{{field.label}}</label>
                                <input type="text" class="form-control" placeholder="{{field.placeHolder}}" id="{{field.id}}"  required="{{field.required}}" data-validation-required-message="Please enter your name.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>                    
                        <br>
                        <div id="success"></div>
                        <div class="row">
                            <div class="form-group col-xs-12">
                                <button type="submit" class="btn btn-success btn-lg">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `
})

export class ContactSectionComponent {
    @Input() fields : ContactModel[];
}