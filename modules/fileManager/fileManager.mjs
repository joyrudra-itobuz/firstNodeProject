//Give The User a List
//Create folder
//Create File
//Delete File
//Delete Folder
//Goto Folder
//Open File
//Write File

//Code Starts
import * as process from "process";
import * as fs from "fs";
import * as fsProm from "fs/promises";
import * as path from "path";

const curentPath = path.resolve();
console.log(curentPath);

console.log(
  "Press 1 to Read A File\nPress 2 to Write a File\nPress 3 to Create a New Folder\nPress 4 read a Folder\nPress 5 to delete a folder\nPress 6 to Create New File"
);
const input = process.argv;

// console.log(input[2], input[3]);
const userChoice = input[2];
console.log("User Choice : " + userChoice);

if (userChoice == 1) {
  console.log("Read File Called!");
  const userInput = input[3];
  readFile(userInput);
} else if (userChoice == 3) {
  const userInput = input[3];
  makeDir(userInput);
} else if (userChoice == 4) {
  readContents();
} else if (userChoice == 5) {
  const userInput = input[3];
  removeDir(userInput);
} else if (userChoice == 6) {
  const fileName = input[3];
  const folderName = input[4];
  createNewFile(fileName, folderName);
}

async function readFile(userInput) {
  try {
    const data = await fsProm.readFile(path.resolve(userInput), {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

function makeDir(userInput) {
  const folderPath = curentPath + "/" + userInput;
  if (!fs.existsSync(folderPath));
  fs.mkdirSync(folderPath);
  console.log("Folder Created!");
}

function readContents() {
  const folderPath = curentPath;
  try {
    const readData = fs.readdirSync(folderPath);
    console.log(readData);
  } catch (e) {
    console.error(e);
  }
}

function removeDir(userInput) {
  const folderPath = curentPath + "/" + userInput;
  try {
    fs.rmdirSync(folderPath);
    console.log("removed");
  } catch (e) {
    console.error(e);
  }
}

async function createNewFile(fileName, folderLocations) {
  if (folderLocations != "0") {
    const folderLocation = curentPath + "/" + folderLocations;
    try {
      const data = await fsProm.readFile(`${folderLocation}/${fileName}`, {
        encoding: "utf-8",
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const data = await fsProm.readFile(path.resolve(fileName), {
        encoding: "utf-8",
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
}

// console.log(a);
