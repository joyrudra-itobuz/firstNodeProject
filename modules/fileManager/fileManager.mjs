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

import * as fs from "fs/promises";
import * as path from "path";

const curentPath = path.resolve();
console.log(curentPath);

console.log(
  "Press 1 to Read A File\nPress 2 to Write a File\nPress 3 to Create a New Folder\nPress 4 read a Folder\nPress 5 to delete a folder\nPress 6 to Create New File\nPress 7 to delete a file"
);
const input = process.argv;

const userChoice = input[2];
console.log("User Choice : " + userChoice);

//Chcking User Input

if (userChoice === 1) {
  console.log("Read File Called!");
  const userInput = input[3];
  const folderName = input[4];
  readFile(userInput, folderName);
} else if (userChoice === 2) {
  const fileName = input[3];
  const folderName = input[4];
  const data = input[5];
  writeFile(fileName, folderName, data);
} else if (userChoice === 3) {
  const userInput = input[3];
  const folderName = input[4];
  makeDir(userInput, folderName);
} else if (userChoice === 4) {
  const folderName = input[3];
  readContents(folderName);
} else if (userChoice === 5) {
  const userInput = input[3];
  const folderName = input[4];
  removeDir(userInput, folderName);
} else if (userChoice === 6) {
  const fileName = input[3];
  const folderName = input[4];
  createNewFile(fileName, folderName);
} else if (userChoice === 7) {
  const fileName = input[3];
  const folderName = input[4];
  deleteFile(fileName, folderName);
}

//Functions

async function readFile(userInput, folderLocations) {
  if (folderLocations !== "0") {
    const folderLocation = curentPath + "/" + folderLocations + "/" + userInput;
    try {
      const data = await fs.readFile(folderLocation, {
        encoding: "utf-8",
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const data = await fs.readFile(path.resolve(userInput), {
        encoding: "utf-8",
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
}

async function writeFile(fileName, folderLocations, inputContent) {
  console.log(fileName);
  console.log(folderLocations);
  const content = inputContent;
  console.log(content);
  if (folderLocations !== "0") {
    const folderLocation = curentPath + "/" + folderLocations;
    console.log(folderLocation);
    try {
      const data = await fs.writeFile(`${folderLocation}/${fileName}`, content);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const data = await fs.writeFile(path.resolve(fileName), content);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
}

async function makeDir(userInput, folderLocations) {
  if (folderLocations !== "0") {
    const folderLocation = curentPath + "/" + folderLocations + "/" + userInput;
    if (!fs.existsSync(folderLocation));
    await fs.mkdir(folderLocation);
    console.log("Folder Created!");
  } else {
    const folderPath = curentPath + "/" + userInput;
    if (!fs.existsSync(folderPath));
    await fs.mkdir(folderPath);
    console.log("Folder Created!");
  }
}

async function readContents(folderLocations) {
  if (folderLocations !== "0") {
    try {
      const folderPath = curentPath + "/" + folderLocations;
      const readData = await fs.readdir(folderPath);
      console.log(readData);
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const folderPath = curentPath;
      const readData = await fs.readdir(folderPath);
      console.log(readData);
    } catch (e) {
      console.error(e);
    }
  }
}

async function removeDir(userInput, folderLocation) {
  if (folderLocation !== 0) {
    const folderPath = curentPath + "/" + folderLocation + "/" + userInput;
    try {
      await fs.rmdir(folderPath);
      console.log("Removed Directory");
    } catch (e) {
      console.error(e);
    }
  } else {
    const folderPath = curentPath + "/" + userInput;
    try {
      await fs.rmdir(folderPath);
      console.log("Removed Directory");
    } catch (e) {
      console.error(e);
    }
  }
}

async function createNewFile(fileName, folderLocations) {
  console.log(fileName);
  console.log(folderLocations);
  if (folderLocations !== "0") {
    const folderLocation = curentPath + "/" + folderLocations;
    console.log(folderLocation);
    try {
      const data = await fs.writeFile(`${folderLocation}/${fileName}`, "");
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const data = await fs.writeFile(path.resolve(fileName), "");
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
}

async function deleteFile(fileName, folderLocations) {
  console.log("Now Deleteing : " + fileName);
  console.log(
    "On Location : " + curentPath + "/" + folderLocations + "/" + fileName
  );

  if (folderLocations !== "0") {
    const folderLocation = curentPath + "/" + folderLocations + "/" + fileName;
    try {
      await fs.unlink(folderLocation);
      console.log("File Removed!");
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      await fs.unlink(`${curentPath}"/"${fileName}`);
      console.log("File Removed!");
    } catch (e) {
      console.error(e);
    }
  }
}

//File Manager
