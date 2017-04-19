import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"

import { Library } from "../../shared/Library";
import { LibraryService } from "../../shared/Library.service";

@Component({
    moduleId: module.id,
    selector: "Library-list",
    templateUrl: "Library-list.component.html",
    styleUrls: ["Library-list.component.css"]
})
export class LibraryListComponent implements OnInit {

    Libraries: Library[];

    constructor(private router: Router,
        private LibraryService: LibraryService) { }

    ngOnInit() {
        this.LibraryService // go to the service
            .getAll()   // get Promise 
            .then(result => this.Libraries = result);
    }

    onSelect(selected: Library) {
        // Navigate the user by the address - /Librarys/id when he clicked the list item
        // the address is set in the app.routes.ts file
        this.router.navigate(["/Library", selected.id]);
    }
}