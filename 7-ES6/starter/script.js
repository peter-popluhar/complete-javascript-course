/////////////////////////////////
// Lecture: let and const

// ES5

/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

// ES6
let name6 = 'Jane Shimth';
let age6 = 23;
name6 = 'Jane Miller'
console.log(name6)
*/

// ES5

/*
function drivingLicence5(passedTest) {
    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', ' + yearOfBirth);
}

drivingLicence5(true)



function drivingLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if(passedTest) {
        firstName = 'John';

    }
    console.log(firstName + ', ' + yearOfBirth);
}

drivingLicence6(true)


let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

*/

/////////////////////////////////
// Lecture: Blocks and IIFEs

// es6

/*
{
    const a = 1;
    let b = 2;
    console.log(a + b)
}

// es5

(function() {
    var a = 1;
    var b = 2;
    console.log(a + b)
})()
*/


/////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smiths';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

console.log(`This is ${firstName} ${lastName} he was born in ${yearOfBirth}, and he is ${calcAge(yearOfBirth)}`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('s'));
console.log(n.includes('y'));
console.log(n.repeat(5));
*/


/////////////////////////////////
// Lecture: Arrays

//const boxes = document.querySelectorAll('.box');

// ES5
//var boxesArr5 = Array.prototype.slice.call(boxes);
/*
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerBlue'
})
*/

//ES6


//const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerBlue')
//const boxesArr6 = Array.from(boxes);
/*
//ES5
for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
      continue;
  }

  boxesArr5[i].textContent = 'I change to blue'
}
*/

//ES6

/*
for (const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I change to blue'
}

// ES5
var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur) {
    return cur >= 18;
})

console.log(full)
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18))
console.log(ages.find(cur => cur >= 18))

 */

/////////////////////////////////
// Lecture: Spread operator

/*

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2)

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3)

const familySmith = ['John','Jane', 'Mark'];
const familyMiller = ['Mary','Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily' ,...familyMiller];
console.log(bigFamily)

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple')
console.log(all)
*/

/////////////////////////////////
// Lecture: Rest parameters
/*
//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(curr) {
        console.log((2016 - curr) >= 18)
    })
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1997);

//ES6
function isFullAge6(...years) {
    years.forEach(curr => console.log((2016 - curr) >= 18))
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1997);
*/

//ES5
/*
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(curr) {
        console.log((2016 - curr) >= limit)
    })
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1997);

//ES6
function isFullAge6(limit, ...years) {
        years.forEach(curr => console.log((2016 - curr) >= limit))
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1997);
*/

/////////////////////////////////
// Lecture: Default parameters

// ES5

/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality
}

var john = new SmithPerson('John', 1990)
var emily = new SmithPerson('Emily', 1993, 'Diaz', 'spanish')

*/

// ESS6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality
}

var john = new SmithPerson('John', 1990)
var emily = new SmithPerson('Emily', 1993, 'Diaz', 'spanish')
*/

/////////////////////////////////
// Lecture: Maps

/*
const question = new Map();
question.set('question', 'What is the name');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong answer');

//console.log(question.get('question'))
//console.log(question.size)

if(question.has(4)) {
    //question.delete(4);
    //console.log(question.get(4))
}

//question.clear()

//question.forEach((value, key) => console.log(value, key))

for (let [key, value] of question.entries()) {

    if(typeof key === 'number') {
        console.log(key, value)
    }
}

const ans = parseInt(prompt('write correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

/////////////////////////////////
// Lecture: Classes
// ES5

/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age)
}

var john5 = new Person5('John', 1960, 'teacher');
console.log(john5);

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age)
    }

    static greeting() {
        console.log('Hey there');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

console.log(john6)

Person6.greeting()

*/

/////////////////////////////////
// Lecture: Classes and subclasses

// ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age)
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++
    console.log(this.medals)
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3,50)

johnAthlete5.calculateAge()
johnAthlete5.wonMedal()

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age)
    }
}

class Athelete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++
        console.log(this.medals)
    }
}

const johnAthlete6 = new Athelete6('John', 1990,'swimmer', 3, 50);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/

/////////////////////////////////
// CODING CHALLENGE

/*

 Suppose that you're working in a small town administration, and you're in charge of two town elements:
 1. Parks
 2. Streets

 It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

 At an end-of-year meeting, your boss wants a final report with the following:
 1. Tree density of each park in the town (forumla: number of trees/park area)
 2. Average age of each town's park (forumla: sum of all ages/number of parks)
 3. The name of the park that has more than 1000 trees

 4. Total and average length of the town's streets
 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

 All the report data should be printed to the console.

 HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

 */

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDesnity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportPark(p) {
    console.log('-----PARKS REPORT-----');

    //density
    p.forEach(el => el.treeDesnity())

    // average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages)
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // more then 2000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreet(s) {
    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());


}

reportPark(allParks)
reportStreet(allStreets)










































































