import { Component, OnInit } from "@angular/core";
import { PopcornService } from "./popcorn.service";

@Component({
  selector: "app-popcorn",
  templateUrl: "./popcorn.component.html",
  styleUrls: ["./popcorn.component.css"]
})
export class PopcornComponent implements OnInit {
  constructor(private _popcornService: PopcornService) {}

  ngOnInit() {}

  cookIt(qty: number) {
    this._popcornService.cookPopcorn(qty);
  }
}
