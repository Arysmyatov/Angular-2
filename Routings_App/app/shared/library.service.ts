import { Injectable } from "@angular/core";

import { Library } from "./library";

let libraries = [
    new Library("1", "Ambience", "Ambience", "Natural Ambience is a universal collection of high-quality sounds which can help you create the sound atmosphere of various locations such as a city, a forest, a beach, a cave, the underwater world and many other things. Thanks to the unique system of combination, you get the opportunity to create hundreds of original sounds."),
    new Library("2", "Weapon", "Weapon", "Comming Soon"),
    new Library("3", "Food", "Food", "We recorded different  sounds related to food and its cooking.Chewing, swallowing , boiling and many other sounds are waiting for you in the library."),
    new Library("4", "PickUp", "PickUp", "The majority of games make you grab various objects and artifacts to go ahead. In this library, you can find sounds imitating picking up different stuff like first-aid kits, cartridges, coins, the weapon and other important objects. These sounds are perfectly suitable for games of any genres."),
    new Library("5", "Interface", "Interface", "The interface is a new and convenient way to create GUI sounds for games, applications, advertising, presentations and many other media projects. By means of the unique system of sound combination and processing, you can create original clicks, popups, swipes and many other sounds to polish up your project.")
];

// Promise, that comes to the resoleved state immediately with the data fom the libraries array
let librariesPromise = Promise.resolve(libraries);

// The service for the labrary data working with
@Injectable()
export class LibraryService {

    // The method for the receiving all the libraries. Return the Library array
    getAll(): Promise<Library[]> {
        return librariesPromise;
    }

    // The method for the  eceiving all the library by id. Return the Promise with the library object.
    getLibrary(id: string): Promise<Library> {
        return librariesPromise
            .then(libraries => libraries.find(x => x.id == id));
    }
}