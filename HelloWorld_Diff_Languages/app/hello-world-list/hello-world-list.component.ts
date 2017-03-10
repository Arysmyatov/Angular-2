import { Component } from "@angular/core";
import { Phrase } from "./phrase";

const VALUES = [
    "Hello World", "Привет Мир","Привіт Світ", "Hola Mundo", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Witaj świecie", "Hej världen", "Pozdravljen, svet", "Прывітанне Сусвет"];

@Component({
    selector: "hello-world-list",
    templateUrl: "app/hello-world-list/hello-world-list.component.html",
    styleUrls: ["app/hello-world-list/hello-world-list.component.css"]
})
export class HelloWorldListComponent {
    PhraseList = VALUES;
}