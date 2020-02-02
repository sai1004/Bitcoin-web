import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-features",
  templateUrl: "./our-features.component.html",
  styleUrls: ["./our-features.component.css"]
})
export class OurFeaturesComponent implements OnInit {
  content: any[] = [
    {
      head: "Mobile",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
      head: "Safe & Secure",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      head: "Wallet",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      head: "Experts Support",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      head: "Instant Exchange",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      head: "Recuring Buys",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    // { icon: '../../../assets/img/'}
  ];

  constructor() {}

  ngOnInit() {}
}
