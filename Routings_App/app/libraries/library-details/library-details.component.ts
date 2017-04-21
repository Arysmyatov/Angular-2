import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Library } from "../../shared/library";
import { LibraryService } from "../../shared/library.service";

@Component({
    moduleId: module.id,
    selector: "library-details",
    templateUrl: "library-details.component.html"
})
export class LibraryDetailsComponent implements OnInit {

    library: Library;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: LibraryService) { }

    ngOnInit() {

        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];
            this.service
                .getLibrary(id)  // interact to the service and call the library by id
                .then(result => this.library = result);
        });
    }

    goToLibrariesList() {
        this.router.navigate(["/libraries"]);
    }
}