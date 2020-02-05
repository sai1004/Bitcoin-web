import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-get-start-bitcoin",
  templateUrl: "./get-start-bitcoin.component.html",
  styleUrls: ["./get-start-bitcoin.component.css"]
})
export class GetStartBitcoinComponent implements OnInit {
  content: any[] = [
    {
      icon: "../../../assets/img/process-icons/1.png",
      head: "Create Your Wallet",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      icon: "../../../assets/img/process-icons/2.png",
      head: "Create Your Wallet",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      icon: "../../../assets/img/process-icons/3.png",
      head: "Create Your Wallet",
      para:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  constructor() {}

  ngOnInit() {}
}
