import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; 

import { AppComponent } from "./app.component";
import { Dashboard } from "./Dashboard/dashboard.component";
import { Libraries } from "./Libraries/library.component";
import { LibraryTable } from "./Libraries/library-table/library-table.component";
import { Soundgroup } from "./Soundgroup/soundgroup.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([ // настройка маршрутов
            { path: "dashboard", component: Dashboard }, // при переходе по адресу localhost:3000/component1 должен активироваться компонент List1Component
            { path: "libraries", component: Libraries },
            { path: "soundgroup", component: Soundgroup },
            { path: "", redirectTo: "dashboard", pathMatch: "full" }
        ])
    ],
    declarations: [AppComponent, Dashboard, Libraries, LibraryTable, Soundgroup],
    bootstrap: [AppComponent]
})
export class AppModule { }
