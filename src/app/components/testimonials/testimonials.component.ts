import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.css"]
})
export class TestimonialsComponent implements OnInit {
  num: number = 0;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.num++;
      this.slider = this.reviews[this.num];
    }, 3000);
  }

  reviews: any[] = [
    {
      icon: "../../../assets/img/review/1.jpg",
      name: "Katy Abrams",
      designation: "Ceo Bitcoin",
      feedback:
        '"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”'
    },
    {
      icon: "../../../assets/img/review/2.jpg",
      name: "Katy Abrams",
      designation: "Ceo Bitcoin",
      feedback:
        '"Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. .”'
    },
    {
      icon: "../../../assets/img/review/3.jpg",
      name: "Katy Abrams",
      designation: "Ceo Bitcoin",
      feedback:
        '"Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger.”'
    }
  ];

  slider: any = this.reviews[0];

  next() {
    this.num++;
    if (this.num >= this.reviews.length) {
      this.num = 0;
    }
    this.slider = this.reviews[this.num];
  }

  previous() {
    this.num--;

    if (this.num < 0) {
      this.num = this.reviews.length - 1;
    }

    this.slider = this.reviews[this.num];
  }
}
