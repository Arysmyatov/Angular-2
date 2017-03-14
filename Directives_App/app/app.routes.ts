import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { Dashboard } from "./Dashboard/dashboard.component";
import { LibrariesComponent } from "./Libraries/library/library.component";
import { Soundgroup } from "./Soundgroup/soundgroup.component";

export const routes: Routes = [
    { path: "dashboard", component: Dashboard },
    { path: "libraries", component: LibrariesComponent },
    { path: "soundgroup", component: Soundgroup },
    { path: "", redirectTo: "dashboard", pathMatch: "full" }
]