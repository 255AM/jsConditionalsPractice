const { lookup } = require("dns");

let likesToTravel =  true;
if (likesToTravel) {
    console.log('bonVoyage!');
    
} else {
    console.log('Enjoy your couch!');    
}



favoriteFood = 'steak'

if (favoriteFood === 'fried pickles' || favoriteFood ==='pepperoni rolls') {
    console.log("Congratulations! You have excellent taste!");
} else {
    console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
}

if (1+1>6) {
    console.log('true fact');
} else {
    console.log('lies');
}

if (4*5<=20) {
    console.log('true fact');
} else {
    console.log('lies');
}

if (6-1>=0) {
    console.log('true fact');
} else {
    console.log('lies');
}

let likesDogs = true;

if (likesDogs) {
    console.log('likes dogs');
} else {
    console.log('likes cats');
}

let birthYear = 1978

if (birthYear >= 1977 && birthYear <= 1994 ) {
    console.log('gen y');
} else {
    console.log('whatever');
}

let dude = {
    name:"dudeman",
    language:'englis'

}

if (dude.language === 'englis') {
    console.log(`Hello, ${dude.name}`);
    
} else if (dude.language === 'spanish') {
    console.log(`Hola, ${dude.name}`);
}else if (dude.language === 'French'){
    console.log(`Bonjour, ${dude.name}`)
}

let time = '1:00PM'
let isHungry = true

if (time === '7:30AM' && isHungry) {
    console.log('object');
    
} else if {
    (time === '7:30AM' && isHungry)
   
}
//console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

let favoriteFoods
['pizza', 'steak', 'fried chicken']

for (let i = 0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i])
}

