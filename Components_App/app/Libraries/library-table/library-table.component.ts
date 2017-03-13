import { Component, Input } from "@angular/core";
import { Library } from "./../library";

@Component({
    moduleId: module.id,
    selector: "library-table",
    templateUrl: "library-table.component.html",
    styleUrls: ["library-table.component.css"]
})
export class LibraryTable {
    @Input()
    rowsCount: number;

    private _libraries: Library[];

    @Input()
    set libraries(theLibraries: Library[]) {
        this._libraries = theLibraries;
    }

    get libraries(): Library[] {
        return this._libraries.slice(0, this.rowsCount);
    }

    removeLib(id: number){
        this._libraries = this._libraries.filter(function(obj) {
            return obj.id !== id;
        });
    }
}