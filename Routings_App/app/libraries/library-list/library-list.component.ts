import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"

import { Library } from "../../shared/library";
import { LibraryService } from "../../shared/library.service";

@Component({
    moduleId: module.id,
    selector: "library-list",
    templateUrl: "library-list.component.html",
    styleUrls: ["library-list.component.css"]
})
export class LibraryListComponent implements OnInit {

    libraries: Library[];

    constructor(private router: Router,
        private libraryService: LibraryService) { }

    ngOnInit() {
        this.libraryService 
            .getAll()
            .then(result => this.libraries = result);
    }

    onSelect(selected: Library) {
        this.router.navigate(["/library", selected.id]);
    }
}
