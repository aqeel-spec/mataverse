//  *** FUnctions parameters ***

/*
function sing(song) {
    console.log(`singing : ${song}`)
}
sing('sdf');
// Error
*/

// Example repeat
/*
function sing(song : string) {
    console.log(`singing : ${song}`)
}
sing('umama')
// Correct
*/

// *** ~~~ Required parameters ~~~ *** 
// TypeScript will give you a type error if no. of arguments are less 
// than no. of parameters

// --- Example 
 
/**
function singTwo(first : string, second : string)
 {
    console.log(`${first} / ${second}`)
 }
 //     ❌singTwo(first: string, second: string): void
//singTwo()
//                     ❌// Expected 2 arguments, but got 1
//Error : singTwo('Ball and Chain');
//👍🏻 Ok now 
singTwo('I will serrver', 'Higher love');
//                                     ❌Expected 2 arguments, but got 3.
// Error : singTwo("Go Your Own Way", "The Chain", "Dreams");
*/

/**
   //                                  NOTE : 
    Parameter refers to a function’s declaration of what it expects to receive as an argument.
    Argument refers to a value provided to a parameter in a function call. In the previous example,
    first and second are parameters, while strings such as "Dreams" are arguments.
*/

// *** ~~~ Optional Paramaters (?) ~~~ *** 
/**
    TypeScript allows annotating a parameter as optional by adding
    a ? before the : 
    in its type annotation—similar to optional object type properties.
*/

// if a function parameter is not provided, its
//argument value inside the function defaults to undefined.
/**
    ...Sometimes
    function parameters are not necessary to provide, and the intended use of
    the function is for that undefined value. We wouldn’t want TypeScript to
    report type errors for failing to provide arguments to those optional
    parameters.
*/

// Optional parameters don’t need to be provided to function calls. Their types
// therefore always have | undefined added as a union type.

// --- Example 01
function announceSong(song : string , singer? :string ) {
    console.log(`song : ${song} `);
    if (singer) {
        console.log(`singer : ${singer}`)
    }
}
announceSong('Dil Umeed');
/*👍🏼
Output :{
    song : Dil Umeed 
} 
*/
announceSong('Dil Umeed','Rahat Fateh Ali');
/*👍🏼
Output :{
    song : Dil Umeed 
    singer : Rahat Fateh Ali
} 
*/
announceSong("Greensleeves", undefined); //👍🏼 Ok
/*👍🏼
Output :{
    song : Greensleeves 
} 
*/
/*
    Optional parameters are not the same as parameters with union types that
    happen to include | undefined. Parameters that aren’t marked as optional
    with a ? must always be provided, even if the value is explicitly undefined.
*/

// --- Example 02
/**
    The singer parameter in this announceSongBy function must be provided
    explicitly. It may be a string value or undefined:
*/
function announceSongBy(song: string, singer: string | undefined) { /* ... */
}
// announceSongBy("Greensleeves");
// Error:  ❌Expected 2 arguments, but got 1.
announceSongBy("Greensleeves", undefined); // Ok
announceSongBy("Chandelier", "Sia"); // Ok

//📜📜📜 NOTE :  
// Any optional parameters for a function must be the last parameters.

// ❌ NOTE : 
//Placing an optional parameter before a required parameter would trigger a
//TypeScript syntax error:

// --- Example 03
/**
 *                                             🔌song
   function annnounceSiner(singer? : string , song : string){} 
*/
//❌ A required parameter cannot follow an optional parameter.


// *** ~~~ Default Parameters ~~~ ***
/**
    Optional parameters in JavaScript may be given a default value with an =
    and a value in their declaration.

    In the following rateSong function, rating is inferred to be of type
    number, but is an optional number | undefined in the code that calls the
    function:
*/
// --- Example 01
function rateSong(song : string , rating = 0){
    console.log(`${song} gets ${rating}/5 stars!`)
}
rateSong('photo');
rateSong('set fire to the rain',5);
rateSong('Set fire to the rain', undefined);// take default value 0
/**
  output : {
    photo gets 0/5 stars!
    set fire to the rain gets 5/5 stars!
    Set fire to the rain gets 0/5 stars!
  }
*/
/**
//                      ❌ 
    rateSong('At last','100');
    // error : Argument of type 'string' 
    // is not assignable to parameter of type 'number'.

*/
// *** ~~~ Rest parameters ~~~ ***
/**
    Some functions in JavaScript are made to be called with any number of
    arguments. The ... spread operator may be placed on the last parameter in
    a function declaration to indicate any “rest” arguments passed to the
    function starting at that parameter should all be stored in a single array.

    TypeScript allows declaring the types of these rest parameters similarly to
    regular parameters, except with a [] syntax added at the end to indicate it’s
    an array of arguments.
*/
// --- Example 01
// in example rest parameter song is an array of strings
function singAllSongs (singer : string , ...songs : string[]){
    for (const song of songs ){
        console.log(`${song}, by ${singer}`)
    }
}
singAllSongs('Rehat Fateh Ali Khan');// ok
singAllSongs('Rehat Fateh Ali Khan', 'Raksha kamar');//ok
singAllSongs('Rehat Fateh Ali Khan', 'Dil Umeed','Raksha kamar2');//ok
/** ok
   Output : {
        Raksha kamar, by Rehat Fateh Ali Khan
        Dil Umeed, by Rehat Fateh Ali Khan
        Raksha kamar2, by Rehat Fateh Ali Khan
    }
*/
/** not ok
                                                                   ❌ 
    singAllSongs('Rehat Fateh Ali Khan', 'Dil Umeed','Raksha kamar2',100);
    error : Argument of type 'number' is not assignable to parameter of type 'string'
*/






































































