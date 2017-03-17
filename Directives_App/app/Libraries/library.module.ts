import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LibrariesComponent, 
         LibraryFormComponent, 
         LibraryTableComponent, 
         LibraryService } from "./index";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [LibrariesComponent, LibraryFormComponent, LibraryTableComponent],
    providers: [LibraryService]
})
export class LibraryModule {

}