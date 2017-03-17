import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Library } from "./../library/library";
import { LibraryService } from "./../index";

@Component({
    moduleId: module.id,
    selector: "library-table",
    templateUrl: "library-table.component.html"  
})
export class LibraryTableComponent implements OnInit {

    @Input()
    rowsCount: number;

    private _libraries: Library[];

    constructor(private libraryService: LibraryService) { }

    set libraries(theLibraries: Library[]) {
        this._libraries = theLibraries;
    }

    get libraries(): Library[] {
        return this._libraries.slice(0, this.rowsCount);
    }

    ngOnInit() {
        this._libraries = this.libraryService.getAll();
    }

    @Output()
    removeLibEvent: EventEmitter<number> = new EventEmitter();

    removeLib(id: number) {
        this.libraryService.remove(id);
        this._libraries = this.libraryService.getAll();
    }
}