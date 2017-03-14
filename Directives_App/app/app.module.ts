import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { Dashboard } from "./Dashboard/dashboard.component";
import { LibraryModule } from "./Libraries/library.module";
import { Soundgroup } from "./Soundgroup/soundgroup.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        LibraryModule
    ],
    declarations: [AppComponent, Dashboard, Soundgroup],
    bootstrap: [AppComponent]
})
export class AppModule { }
