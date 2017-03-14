import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Library } from "./../library/library";

@Component({
    moduleId: module.id,
    selector: "library-form",
    templateUrl: "library-form.component.html",
    styleUrls: ["library-form.component.css"]
})
export class LibraryFormComponent {
    isVisible: boolean = false;

    @Input()
    library: Library;


    @Output()
    addLibEvent: EventEmitter<Library> = new EventEmitter();

    addLib() {
        this.addLibEvent.emit(this.library);
        console.log("it's added the lib:" + this.library);
    }

    showForm(){
        this.isVisible = !this.isVisible;
    }
}