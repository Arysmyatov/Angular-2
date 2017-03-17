import { Injectable } from "@angular/core";
import { Library } from "./library/library";

// const LIBRARIES: Library[] = [
//     { id: 1, name: "lib1", order: 1 },
//     { id: 2, name: "lib2", order: 2 },
//     { id: 3, name: "lib3", order: 3 },
//     { id: 4, name: "lib4", order: 4 }
// ];

@Injectable()
export class LibraryService {
    private _libraries: Library[];

    // constructor() {
    //     this._libraries = LIBRARIES;
    // }

    getAll(): Library[] {
        return this._libraries;
    }

    add(newLibrary: Library) {
        this._libraries.push(newLibrary);
    }

    remove(id: number) {
        this._libraries = this._libraries.filter(function (obj) {
            return obj.id !== id;
        });
    }

    resetAll(): Library[] {
        // this._libraries = LIBRARIES;
        return this._libraries;
    };
}