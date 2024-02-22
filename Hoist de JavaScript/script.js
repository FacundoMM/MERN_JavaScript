// 1
console.log(hello);                                   
var hello = 'world';
// console.log(hello); Undefine

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// console.log(needle); magnet

// 3
var brendan = 'super cool';
function printe(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// console.log(brendan); only okay


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// console.log(food); chicken
// console.log(food); half-chicken

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean(); TypeError: mean is not a function


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre); undefined
// console.log(genre); rock
// console.log(genre); r&b
// console.log(genre); disco


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// console.log(dojo); san jose
// console.log(dojo); seattle
// console.log(dojo); burbank
// console.log(dojo); san jose
