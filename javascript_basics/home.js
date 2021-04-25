console.log('hello');
//alert('yo!');

//Variables
var name = 'myname';
console.log(name);

var num = 45;
console.log(num);

//accesing html element from javascript and editing its content
document.getElementById('someText').innerHTML = 'Hey there!';
//var age = prompt('What is your age?');
//console.log(age);

//Numbers in Javascript
var num1 = 10;

// Increment by 1
num1 += 5;
num1++;

//Decrement by 1
num1--;
console.log(num1);

// Divide , multiply *, remainder %

console.log(num1/4);
console.log(num1*4);
console.log(num1%4);

// Functions
//create a function
function fun() {
    console.log('This is a function');
}
//call a function
fun();

function greeting(){
    var name = prompt('what is your name?');
    var result = 'Hello '+name;
    console.log(result);
}
//greeting();

function sumNumbers(num1,num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(1,5);
sumNumbers(1,'5');
sumNumbers('5','5');

//while loops

var num = 0;
while (num < 10)
{
    num += 1;
    //console.log(num);
}

/// For loop 
for(let num = 0; num < 10; num++){
    console.log(num);
}

//Data types
let yourAge = 26;
let yourName = 'swapna';
let name1 = {first:'swapna',last:'G'}; //object
let truth = false; //boolean
let groceries = ['apple','banans','oranges']; //array
let random; //undefined
let nothing = null; //value null

//string in JS
let fruit = 'bananas';
let morefruits = 'banans\napple';
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,5));
console.log(fruit.replace('ban',123));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(morefruits.split('\n'));

//arrays in js
let fruits = ['apple','banans','oranges'];
fruits = new Array('apple','banans','oranges');

console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(),fruits);
console.log(fruits.push('berries'),fruits);
fruits[fruits.length] = 'pineapple';
console.log(fruits);
fruits.shift(); //removes first element from list
console.log(fruits);
fruits.unshift('kiwi'); //adds first element to list
console.log(fruits);
let veggies = ['spinach','onion','tomato'];
let allgroceries = fruits.concat(veggies);
console.log(allgroceries);
console.log(allgroceries.reverse());
let nums = [1,5,2,9,13,2]
console.log(nums.sort());
console.log(nums.sort(function(a,b) {return a-b}));
console.log(nums.sort(function(a,b) {return b-a}));
let b = new Array();
for(let num =0; num <= 10; num++){
    b.push(num);
}
console.log(b);

//objects in js are same as dictionaries in python
let student = {first:'swapna',last:'G',age:26,height:164,
        studentinfo: function(){return this.first+' '+this.last}};
console.log(student.first);
student.first='sai swapna'; //change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentinfo());
var age = 26;
//var age = prompt('what is your age?')
//conditionals, control flows if else;
if(age >= 18 && age <= 35){
    status = 'target demo';
    console.log(status);

}else{
    status = 'not my audience';
    console.log(status);
}
//switch statements
switch(6){
    case 6:
        text = 'Saturday';
        break;
    case 5:
        text = 'Friday';
        break;
    case 0:
        text = 'Sunday';
        break;
    default:
        text = 'weekday';
        break;
}
console.log(text);
