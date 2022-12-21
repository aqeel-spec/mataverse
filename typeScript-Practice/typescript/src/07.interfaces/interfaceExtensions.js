"use strict";
// 
// *** ~~~ ___ Interface extensions ___ ~~~ ***
Object.defineProperty(exports, "__esModule", { value: true });
let myNovells = {
    title: "Ethon frome",
    pages: 3
};
function useGiveBoth(instance) {
    instance.giveString(); // Type : string
    instance.giveNumber(); // type : number
    instance.giveEither(); // type : number | string
}
// By marking an interface as extending multiple other interfaces, you can
// both reduce code duplication and make it easier for object shapes to be
// reused across different areas of code.
