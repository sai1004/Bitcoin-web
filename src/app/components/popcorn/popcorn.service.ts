import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PopcornService {
  constructor() {
    console.log(" popcorn has been injected! ");
  }

  cookPopcorn(qty: number) {
    console.log(qty, "bags of popcorn cooked! ");
  }
}
