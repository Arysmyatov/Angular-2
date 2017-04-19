import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LibraryListComponent } from "./library-list/library-list.component";
import { LibraryDetailsComponent } from "./library-details/library-details.component";

@NgModule({
    imports: [
        // Defining the routings for the feature mofule
        RouterModule.forChild([
            { path: "libraries", component: LibraryListComponent },
            { path: "library/:id", component: LibraryDetailsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LibrariesRoutingModule { }
