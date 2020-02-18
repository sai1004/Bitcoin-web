import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  outputEvent($event: any) {
    if ($event) {
      window.scrollTo(0, 0);
    }
  }
}
