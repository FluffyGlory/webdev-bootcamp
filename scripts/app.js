let age = 17;
let userName = "leif";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "LM Group",
  salary: 5000,
};

function logAdultYears() {
  let adultYears = age - 18;
  console.log(adultYears);
}
logAdultYears();
age = 45;
logAdultYears();
let person = {
  name: "Max",
  greet() {
    console.log("Hi! I'm a method!");
  },
};
person.greet();