"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VALUES = [
    "Hello World", "Привет Мир", "Привіт Світ", "Hola Mundo", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Witaj świecie", "Hej världen", "Pozdravljen, svet", "Прывітанне Сусвет"
];
var HelloWorldListComponent = (function () {
    function HelloWorldListComponent() {
        this.PhraseList = VALUES;
    }
    return HelloWorldListComponent;
}());
HelloWorldListComponent = __decorate([
    core_1.Component({
        selector: "hello-world-list",
        templateUrl: "app/hello-world-list/hello-world-list.component.html",
        styleUrls: ["app/hello-world-list/hello-world-list.component.css"]
    })
], HelloWorldListComponent);
exports.HelloWorldListComponent = HelloWorldListComponent;
//# sourceMappingURL=hello-world-list.component.js.map