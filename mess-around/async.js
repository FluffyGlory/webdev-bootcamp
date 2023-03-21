const fs = require("fs/promises");

async function readFile(location) {
  let fileData;

  //   fileData = fs.readFile("mess-around/data.txt", function (error, fileData) {
  //     console.log("File parsing done!");
  //     console.log(fileData.toString());
  //   });
  try {
  fileData = await fs.readFile(location);
  } catch (error) {
    console.log(error)
  }
  console.log("File parsing done!");
  console.log(fileData.toString());

  console.log("Hi there!");
}

readFile("mess-around/data.txt");
