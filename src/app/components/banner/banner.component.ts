import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  content: any[] = [
    { head: "Invest in Bitcoin Bitcoin Trading" },
    { para: "Use modern progressive technologies of Bitcoin to earn money" }
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit(email: any) {
    console.log(email);
  }
}
