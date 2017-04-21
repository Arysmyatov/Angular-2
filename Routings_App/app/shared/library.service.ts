import { Injectable } from "@angular/core";

import { Library } from "./library";

let libraries = [
    new Library("1", "Ambience", "Ambience", "Natural Ambience is a universal collection of high-quality sounds which can help you create the sound atmosphere of various locations such as a city, a forest, a beach, a cave, the underwater world and many other things. Thanks to the unique system of combination, you get the opportunity to create hundreds of original sounds."),
    new Library("2", "Weapon", "Weapon", "Comming Soon"),
    new Library("3", "Food", "Food", "We recorded different  sounds related to food and its cooking.Chewing, swallowing , boiling and many other sounds are waiting for you in the library .")
];

// Promise, that is come to resoled state after getting all the library items
let librariesPromise = Promise.resolve(libraries);

// The service for the working with libraries
@Injectable()
export class LibraryService {

    // The method for the getting all the libraries
    getAll(): Promise<Library[]> {
        return librariesPromise;
    }

    // The method for the getting the phrase by id
    getLibrary(id: string): Promise<Library> {
        return librariesPromise
            .then(libraries => libraries.find(x => x.id == id));
    }
}

