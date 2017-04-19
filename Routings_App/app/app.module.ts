import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./home/home.component";
import { LibraryService } from "./shared/library.service";

import { LibrariesModule } from "./libraries/libraries.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LibrariesModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [LibraryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
