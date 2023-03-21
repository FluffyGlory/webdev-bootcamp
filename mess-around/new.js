console.log(new Date().toISOString());

class Job {
  constructor(jobTitle, place, salary) {
    (this.title = jobTitle), (this.location = place);
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location}, and I earn $${this.salary}.`
    );
  }
}
const developer = new Job("Developer", "New York", 50000);
const businessman = new Job("Businessman", "Anywhere", 10000000000);
console.log(businessman.describe());
console.log(developer.describe());
