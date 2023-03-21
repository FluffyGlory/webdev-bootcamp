const path = require("path");
const fs = require("fs");

function getStoredRestaurants() {
  const filePath = path.join(__dirname, "..", "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  return storedRestaurants;
}
function storeRestaurants(storableRestaurants) {
  const filePath = path.join(__dirname, "..", "data", "restaurants.json");
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storeRestaurants: storeRestaurants,
};
