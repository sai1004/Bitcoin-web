import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Output()
  outputEvent = new EventEmitter();

  onArrowClick($event) {
    this.outputEvent.emit($event);
    console.log($event);
  }
}
