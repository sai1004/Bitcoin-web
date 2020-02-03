import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";

const routes: Routes = [
  { path: "", component: WelcomePageComponent },
  { path: "auth", component: AuthPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
