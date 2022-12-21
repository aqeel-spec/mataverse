"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// *** ~~~ Return types ~~~ ***
// --- Example 01
// Type: (songs: string[]) => number
function singSongs(songs) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
}
const songLength1 = singSongs(["owww", "wewew", "asdasd"]);
console.log(songLength1);
// Above function is returning length
// --- Example 01
//function getSongAt(songs: string[], index: number): string | undefined;
function getSongAt(songs, index) {
    return index < songs.length ? songs[index] : undefined;
}
const songLength = getSongAt(["song1", "song2", "song3"], 2);
console.log(songLength);
// ** ~~ Explicit Return Types ~~ **
// Few cases where it can be useful specifically for functions:
/**
 *  You might want to enforce functions with many possible returned
    values always return the same type of value.

 *  TypeScript will refuse to try to reason through return types of recursive
    function.

 *  It can speed up TypeScript type checking in very large projects—i.e.,
    those with hundreds of TypeScript files or more.
*/
// --- Example 01
// For a function declaration, that falls just before the {:
function recursiveSong(songs, count = 0) {
    //console.log('lengthv: ', songs.length)  // 3
    return songs.length ? recursiveSong(songs.slice(1), count + 1) : count;
}
// recursiveSong(['Song1','Song2','Song3'])
console.log(recursiveSong(["Song1", "Song2", "Song3"]));
// Output : 3
// initially count has 0
// but songs.slice(1) checks is there any element present in songs arrays
// if Yes : then loop execute 2 times
// at this stage "recursiveSong(songs.slice(1) " count has "2" value
// but again call will add count(2) + 1  ~~~ 3
// so fila output is : 3
//For arrow functions (also known as lambdas), that falls just before the =>:
// --- Example 02
const singSongRecursive = (songs, count = 0) => songs.length ? singSongRecursive(songs.slice(1), count + 1) : count;
console.log("singSongRecursive : ", singSongRecursive(["song1", "song2", "song3"]));
// Same result as above function
/**
  Here, the getSongRecordingDate function is explicitly declared as
  returning Date | undefined, but one of its return statements incorrectly
  provides a string:
*/
// --- Example 03
function getSongRecordingDate(song) {
    switch (song) {
        case "Strange fruits":
            return new Date("April 20, 1939");
        case "Greenleaves":
            return undefined;
        //Error : Type 'string' is not assignable to type 'Date'
        default:
            return undefined;
    }
}
const value = getSongRecordingDate('Strange fruits');
console.log('value : ', value);
