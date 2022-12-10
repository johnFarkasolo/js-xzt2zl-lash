// Import stylesheets
import './style.css';
import { sortedUniq, uniq, reduce, set, get, find, keyBy } from 'lodash';

const arr = [1, 3, 3, 3, 4, 4, 5, 78, 5, 5, 9, 34, 9, 65, 6, 9, 42, 87, 3];
const uniqArray = uniq(arr);

const persons = [
  { name: 'stepan', age: 46 },
  { name: 'delphina', age: 18 },
  { name: 'ela', age: 33 },
  { name: 'zik', age: 18 },
  { name: 'lafler', age: 33 },
  { name: 'mandao', age: 46 },
  { name: 'zik-zak', age: 18 },
  { name: 'felicja', age: 19 },
];

const reduceUsers = reduce(
  persons,
  function (result, person) {
    if (person.age >= 18 && person.age <= 50) {
      (result[person.age] || (result[person.age] = [])).push(person);
    }

    return result;
  },
  {}
);

const iterable = Object.keys(reduceUsers).toString();

const ageFilter = (age) => {
  console.log('ittta');
  return persons.filter((person) => {
    if (person.age === age) {
      return reduceUsers[person.age];
    }
  });
};

// let that19 = ageFilter(19);
// let that18 = ageFilter(18);
// let that33 = ageFilter(33);

let bar = { foo: { key: 'foo', then: 'fufu' } };

const setData = set(bar, 'foo.data[0]', 'someTitle');
const setData2 = set(bar, 'foo.data[1]', 'dsdsd');
let name = get(bar, 'foo', 'dsdsd');

let users = [
  { id: 'chlen', firstName: 'John', lastName: 'Cum', age: 19, gender: 'male' },
  {
    id: 'chlen343',
    firstName: 'Kim',
    lastName: 'Zoom',
    age: 22,
    gender: 'female',
  },
  {
    id: 'chlen2345',
    firstName: 'John',
    lastName: 'Her',
    age: 21,
    gender: 'male',
  },
  {
    id: 'chlen45352',
    firstName: 'Kate',
    lastName: 'Lord',
    age: 28,
    gender: 'female',
  },
];

let filteredUsers = find(users, { firstName: 'John', age: 21 });

let usersKey = keyBy(users, "id")

let userKate = usersKey["chlen45352"]

console.log(userKate)

// Write Javascript code!
const appDiv = document.querySelector('#app');
const usersDiv = document.querySelector('#users');
appDiv.innerHTML = uniqArray;
usersDiv.innerHTML = 'persons';
