for (let i = 0; i < 10; i++) {
  console.log(i);
}
// for (create iteration variable; create bounds for the var; create what happens to the var each iteration)

const users = ["Max", "Anna", "Joel"];

for (const user of users) {
  console.log(user);
}
const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};
for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser["propertyName"]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");
