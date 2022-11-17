//     ****   break, continue, and nested loops  **** //
// let groups = [
//   ["Martin", "Maniel", "Meith"],
//   ["Margot", "Marina", "Ali"],
//   ["Helen", "Jonah", "Sambikos"],
// ];

// for (let i = 0; i < groups.length; i++) {
//   let matches = 0;
//   for (let j = 0; j < groups[i].length; j++) {
//     if (groups[i][j].startsWith("M")) {
//       matches++;
//     } else {
//       continue;
//     }
//     if (matches === 2) {
//       console.log("Found a group with two names starting with an");
//       console.log(groups[i]);
//       continue;
//     }
//     if (matches === 3) {
//       console.log("Found a group with three names starting with an");
//       console.log(groups[i]);
//       break;
//     }
//   }
// }

// let groups = [
//   ["Martin", "Maniel", "Meith"],
//   ["Margot", "Marina", "Ali"],
//   ["Helen", "Jonah", "Sambikos"],
// ];

// for (let group of groups) {
//   for (let member of group) {
//     if (member.startsWith("M")) {
//       console.log("found one starting with M:", member);
//       break;
//     }
//   }
//}


/****break and continue and labeled blocks***** */

let groups = [
  ["Martin", "Maniel", "Meith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
];

outer: for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M:", member);
      break outer;
    }
  }
}
