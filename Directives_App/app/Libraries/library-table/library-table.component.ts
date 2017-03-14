import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Library } from "./../library/library";

@Component({
    moduleId: module.id,
    selector: "library-table",
    templateUrl: "library-table.component.html",
    styleUrls: ["library-table.component.css"]
})
export class LibraryTableComponent {
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

    @Output()
    removeLibEvent: EventEmitter<number> = new EventEmitter();

    removeLib(id: number){
        this._libraries = this._libraries.filter(function(obj) {
            return obj.id !== id;
        });
        this.removeLibEvent.emit(id);
    }
}