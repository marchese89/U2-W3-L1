class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(user) {
    if (this.age > user.age) {
      return `${this.firstName} è più vecchio di ${user.firstName}`;
    } else {
      return `${this.firstName} è più giovane di ${user.firstName}`;
    }
  }
}

const u1 = new User("Nome1", "Cognome1", 19, "location1");
const u2 = new User("Nome2", "Cognome2", 18, "location2");
console.log(u1.compareAge(u2));
