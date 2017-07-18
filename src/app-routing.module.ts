import { HomePageComponent } from './app/pages/home-page/home-page.component';
import { UserPageComponent } from './app/pages/user-page/user-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from "@angular/router";

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'user', component: UserPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}