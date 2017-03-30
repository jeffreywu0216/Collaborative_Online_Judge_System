import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { ProblemDetailComponent } from "./components/problem-detail/problem-detail.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuardService } from "./service/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "problems",
    pathMatch: "full"
  },
  {
    path: "problems",
    component: ProblemListComponent
  },
  {
    path: "problems/:id",
    component: ProblemDetailComponent
  },
  {
    path: "profile",
    canActivate: [AuthGuardService],
    component: ProfileComponent
  },
  {
    path: "**",
    redirectTo: "problems"
  }
];

export const routing = RouterModule.forRoot(routes);
