// const orang = {
//   namaDepan: "a",
//   namaBelakang: "n",
// };

// const orang2 = {
//   namaDepan: "b",
//   namaBelakang: "m",
// };

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   static sayHi() {
//     console.log("Halooooo");
//   }

//   greeting() {
//     console.log(`Hello, ${this.firstName} ${this.lastName}!`);
//   }
// }

// const user1 = new User("Ahmad", "Adiputra");
// user1.greeting();

// const user2 = new User("Bona", "Doni");
// user2.greeting();

// User.sayHi();

// const userDatabase = [];

// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }
// }

// function register ini untuk insert data ke db
// const register = (username, password) => {
//   if (username && password) {
//     const user = new User(username, password);
//     user.insertIntoDatabase();

//     return user;
//   }
// };

// // function getUser ini untuk get seluruh data user
// const getUsers = () => {
//   // get data from database
//   return userDatabase;
// };

// const getUser = (username) => {
//   // get data from database
//   const user = userDatabase.filter((user) => user.username === username);
//   if (user.length > 0) return user[0];

//   return null;
// };

// register("Bona", "str0ngp@ssw0rd");
// register("Ahmad", "str0ngp@ssw0rd");

// const registeredUsers = getUsers();
// console.log(registeredUsers);

// const getOneUser = getUser("Bona");
// console.log(getOneUser);

// class Users {
//   userDatabase = [];

//   findAll() {
//     return this.userDatabase;
//   }

//   findOne(username) {
//     const user = this.userDatabase.filter((user) => user.username === username);
//     if (user.length > 0) return user[0];
//     return null;
//   }

//   #insertIntoDatabase(user) {
//     console.log(`Insert user ${user.username} into database`);
//     this.userDatabase.push({
//       username: user.username,
//       password: user.password,
//     });
//   }

//   create(username, password) {
//     if (username && password) {
//       const user = new User(username, password);
//       this.#insertIntoDatabase(user);

//       return user;
//     }
//   }
// }

// const userManager = new Users();
// console.log(userManager.findAll());

// userManager.create("Bona", "str0ngp@ssw0rd");
// userManager.create("Ahmad", "str0ngp@ssw0rd");
// console.log(userManager.findAll());
// console.log(userManager.findOne("Ahmad"));

// class Animal {
//   constructor(name, prefix) {
//     this.name = name;
//     this.prefix = prefix;
//   }

//   sayHi() {
//     console.log(`Hello, ${this.prefix} ${this.name}`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, prefix) {
//     super(name, prefix);
//   }

//   sayHiFromACat() {
//     console.log(`I am a cat`);
//   }
// }
// const newCat = new Cat("kitty", "miss");
// newCat.sayHi();
// newCat.sayHiFromACat();

// const newAnimal = new Animal("Animal", "Mr");
// newAnimal.sayHi(); // akan error

// HASH MAP
// const obj = {
//   David: "001",
//   Buchanan: "002",
// };

// const newMap = new Map();
// newMap.set("David", "001");
// newMap.set("Buchanan", "002");

// console.log(newMap.get("Buchanan"));

// newMap.forEach((value, key) => {
//   console.log("ini value:", value);
//   console.log("ini key:", key);
// });

// LINKED LIST
// [1, 2, 3, 4, 5, 6];
// [1 > 2 > 3 > 4 > 5]
// [1 < 2 < 3 < 4 < 5]
// [1 <-> 2 <-> 3 <-> 4 <-> 5]

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    },
  },
};
