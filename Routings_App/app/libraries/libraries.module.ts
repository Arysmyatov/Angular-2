import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LibraryListComponent } from "./library-list/library-list.component";
import { LibraryDetailsComponent } from "./library-details/library-details.component";

import { LibrariesRoutingModule } from "./libraries-routing.module";

@NgModule({
    imports: [
        CommonModule,
        LibrariesRoutingModule
    ],
    declarations: [
        LibraryDetailsComponent,
        LibraryListComponent
    ]
})
export class LibrariesModule { }