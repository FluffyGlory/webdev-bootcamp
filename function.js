function greetUser(username = "Leif") {
  console.log("Hi " + username + "!");
  console.log(`Hi ${username}!`)
}

greetUser();

function sumUp(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

const inputNumbers = [1, 5, 5, 5, 5];
console.log(sumUp(...inputNumbers));
