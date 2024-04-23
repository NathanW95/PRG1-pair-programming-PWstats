const { constants } = require("buffer");
const { Console } = require("console");
const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);

let lengths = new Array (20).fill(0);

for (line of lines) {
      
      elements = line.split(delimiter);
      let len = elements[1].length;
      lengths[len]++; // len is refering to the X(10) peice of data within the array lengths. e.g is element length is 5 it will go to the 5th data set in array 'lengths' and add 1.
    //  passwordLength.push(elements[1].length());

}
console.log(lengths);


let length = 0;
for (element of lengths){

   fs.appendFileSync(outputFile, "Chars: " + length + "," + "Count: " + element + '\n', 'utf-8');
   length += 1
}

// console.log(length);
// console.log(lengths);
// console.log(length[len]);

// for (line of arrayOfPasswords) {

//       passwordLength[Char[i]].push(arrayOfPasswords.length(i))
