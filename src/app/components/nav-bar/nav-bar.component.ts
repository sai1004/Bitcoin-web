import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  menus: string[] = [
    "Home",
    "Solution",
    "Features",
    "News",
    "About",
    "Contact"
  ];

  show: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }
}
