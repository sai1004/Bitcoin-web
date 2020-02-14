import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-team",
  templateUrl: "./our-team.component.html",
  styleUrls: ["./our-team.component.css"]
})
export class OurTeamComponent implements OnInit {
  team: any[] = [
    {
      img: "../../../assets/img/member/1.jpg",
      name: "Tom Binegar",
      designation: "Business Devlopment"
    },
    {
      img: "../../../assets/img/member/2.jpg",
      name: "Tom Binegar",
      designation: "Business Devlopment"
    },
    {
      img: "../../../assets/img/member/3.jpg",
      name: "Tom Binegar",
      designation: "Business Devlopment"
    },
    {
      img: "../../../assets/img/member/4.jpg",
      name: "Tom Binegar",
      designation: "Business Devlopment"
    },
    {
      img: "../../../assets/img/member/5.jpg",
      name: "Tom Binegar",
      designation: "Business Devlopment"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
