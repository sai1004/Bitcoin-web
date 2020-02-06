import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-features",
  templateUrl: "./our-features.component.html",
  styleUrls: ["./our-features.component.css"]
})
export class OurFeaturesComponent implements OnInit {
  content: any[] = [
    {
      icon: "../../../assets/app.svg",
      head: "Mobile",
      para:
        "Excepteur sint occaecat cupidatat non  <br/> proident sunt in culpa qui officia deserunt <br/> mollit anim id est laborum."
    },

    {
      icon: "../../../assets/verified.svg",
      head: "Safe & Secure",
      para:
        "Excepteur sint occaecat cupidatat non  <br/> proident sunt in culpa qui officia deserunt <br/> mollit anim id est laborum."
    },
    {
      icon: "../../../assets/wallet.svg",
      head: "Wallet",
      para:
        "Excepteur sint occaecat cupidatat non  <br/> proident sunt in culpa qui officia deserunt <br/> mollit anim id est laborum."
    },
    {
      icon: "../../../assets/support.svg",
      head: "Experts Support",
      para:
        "Excepteur sint occaecat cupidatat non  <br/> proident sunt in culpa qui officia deserunt <br/> mollit anim id est laborum."
    },
    {
      icon: "../../../assets/exchange.svg",
      head: "Instant Exchange",
      para:
        "Excepteur sint occaecat cupidatat non  <br/> proident sunt in culpa qui officia deserunt <br/> mollit anim id est laborum."
    },
    {
      icon: "../../../assets/grave.svg",
      head: "Recuring Buys",
      para:
        "Excepteur sint occaecat cupidatat non  <br/> proident sunt in culpa qui officia deserunt <br/> mollit anim id est laborum."
    }
    // { icon: '../../../assets/img/'}
  ];

  constructor() {}

  ngOnInit() {}
}
