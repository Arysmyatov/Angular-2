import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Library } from "./../library/library";
import { LibraryService } from "./../index";

@Component({
    moduleId: module.id,
    selector: "library-form",
    templateUrl: "library-form.component.html",
    styleUrls: ["library-form.component.css"]
})
export class LibraryFormComponent {
    isVisible: boolean = false;

    constructor(private libraryService: LibraryService) { }    

    @Input()
    name: string;

    @Input()
    order: number;

    @Output()
    addLibEvent: EventEmitter<Library> = new EventEmitter();


    addLib() {
        let newLib = new Library();
        newLib.name  = this.name;
        newLib.order = this.order;  

        this.libraryService.add(newLib);      

        this.addLibEvent.emit(newLib);
        console.log("it's added the lib:" + newLib.id);
    }

    showForm(){
        this.isVisible = !this.isVisible;
    }
}