import { Component } from "@angular/core";
import { Library } from "./library";

const LIBRARIES: Library[] = [
    { id: 1, name: "lib1", order: 1 },
    { id: 2, name: "lib2", order: 2 },
    { id: 3, name: "lib3", order: 3 },
    { id: 4, name: "lib4", order: 4 }
]; 

@Component({
    moduleId: module.id,
    selector: "libraries",
    templateUrl: "library.component.html",
    styleUrls: ["library.component.css"]
})
export class Libraries {
    pageName: string     = "Libraries";
    libraries: Library[] = LIBRARIES;

    removeLibHandler(value){
        console.log(`It' s removed library with ${value} id`);
    }
}