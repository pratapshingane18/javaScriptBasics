const person = {
  firstName: 'prats',
  lastName: 'There',
  age: 21,
  email: 'prats18.com',
  hobbies: ['Cooking', 'run'],
  address: {
    city: 'Sangli',
    state: 'MH'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'Lomr', age: 30},
  {name: 'trie', age: 23},
  {name: 'liesy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}