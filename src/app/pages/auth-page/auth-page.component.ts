import { Component, OnInit, Input } from "@angular/core";
import { Profile } from "../../entities/Profile";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.css"]
})
export class AuthPageComponent implements OnInit {
 
  @Input() profile: Profile;

  constructor() {
    this.profile = new Profile()
  }

  ngOnInit() {}
 

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }
}
