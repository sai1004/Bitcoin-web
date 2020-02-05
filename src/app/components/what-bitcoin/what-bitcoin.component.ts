import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-what-bitcoin",
  templateUrl: "./what-bitcoin.component.html",
  styleUrls: ["./what-bitcoin.component.css"]
})
export class WhatBitcoinComponent implements OnInit {
  content: any[] = [
    {
      head: "What is Bitcoin",
      subHead:
        "Bitcoin is an innovative payment network and a new <wb> kind of money.",
      para:
        "Bitcoin is one of the most important inventions in all of <br/> human history. For the first time ever, anyone can send or <br/> receive any amount of money with anyone else, anywhere <br/> on the planet, conveniently and without restriction. It’s <br/> the dawn of a better, more free world."
    }
  ];

  constructor() {}

  ngOnInit() {}
}
