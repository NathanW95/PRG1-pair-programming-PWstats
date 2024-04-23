const { count } = require("console");
const fs = require("fs");
const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";
if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}
const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);
let lengthOfPassword;
let counter = {
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
  11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0
};
for (line of lines) {
      element = line.split(delimiter);
      lengthOfPassword = element[1].length;
      counter[lengthOfPassword]++;
};
  for (let item in counter){
    fs.appendFileSync(outputFile, `Total Characters in the password: ${item} = ${counter[item]}\n`)
  };