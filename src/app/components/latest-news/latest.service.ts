import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LatestService {
  constructor() {}

  getContent() {
    return [
      {
        img: "../../../assets/img/blog/1.jpg",
        date: "03 JAN 2018",
        head: "Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book",
        updatedBy: "Admin",
        likes: "243",
        comments: "08"
      },
      {
        img: "../../../assets/img/blog/2.jpg",
        date: "28 DEC 2018",
        head: "Blockchain Rolls Out Trading Feature for 22 States in the U.S",
        updatedBy: "Admin",
        likes: "243",
        comments: "08"
      },
      {
        img: "../../../assets/img/blog/3.jpg",
        date: "28 AUG 2018",
        head: "This Week in Bitcoin: Up, Down and Sideways",
        updatedBy: "Admin",
        likes: "243",
        comments: "08"
      }
    ];
  }
}
