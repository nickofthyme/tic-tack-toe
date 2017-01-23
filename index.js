// get prompt librarary from npm
var prompt = require('prompt');

// Sample command line display
//   X | X | X
// -------------
//   X | X | X
// -------------
//   X | X | X

let getplayerNames = async () => {
  let player1 = await prompt.get({
    name: 'Enter name of Player 1',
    required: true
  }).name;
}

getplayerNames()


//   return prompt.get([{
//     name: 'Enter name of Player 1',
//     required: true
//   }], (err, result) => {
//     if (err) {
//       console.log('please re-enter the following')
//
//     }
//     console.log('Command-line input received:');
//     console.log('  Player 1: ' + result.username);
//   });
// }





let position1 = 1;

let display = `
 ${position1} | ${position1} | ${position1}
-----------
 ${position1} | ${position1} | ${position1}
-----------
 ${position1} | ${position1} | ${position1}`

// console.log(display);
