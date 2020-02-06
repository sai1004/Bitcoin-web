import { Component, OnInit } from "@angular/core";
import { LatestService } from "./latest.service";

@Component({
  selector: "app-latest-news",
  templateUrl: "./latest-news.component.html",
  styleUrls: ["./latest-news.component.css"]
})
export class LatestNewsComponent implements OnInit {
  content: any[];

  constructor(private _latestService: LatestService) {
    this.content = _latestService.getContent();
  }

  ngOnInit() {}
}
