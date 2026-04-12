console.log("Hello i'm Mohammad Thoufeeq")
let studies="BE 2nd year"
console.log(studies)
let year=3
console.log(year)

//Templet literals(used to add the embaded expressions)
// let ST_1_marks= 9;
// let ST_2_marks=8;
// let ST_3_marks=9;
// let total_avg_marks=(ST_1_marks+ST_2_marks+ST_3_marks)/3;
// console.log(`The average of the st is ${total_avg_marks}`)

// let s="apple";
// if(s[0]=== "a" && s.length>=5){
//     console.log("good string")
// }else{
//     console.log("not a good string")
// }
//  let num=12;
//  if(num%3==0 &&(num+1==12 || num--==11)){
//     console.log("safe")
//  }else{
//     console.log("unsafe")
//  }
//switch
// let color="red";
// switch(color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     case "Yellow":
//         console.log("ready to go");
//         break;
//     case "default":
//         console.log("The light is broken")
// }
let day=22;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case  3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Give the proper day");
        break;
}

console.error("wrong Password!")
console.warn("Enter correct password")
// prompt("enter name")

// let f_name= prompt("Enter your first name");
// let l_name= prompt("Enter your last name");
// console.log(f_name,"",l_name);
let a = 2;
let b = 6;
let c = 10;

if (a > b && a > c) {
    console.log("a is the largest");
} else if (b > a && b > c) {
    console.log("b is the largest");
} else {
    console.log("c is the largest");
}
//Actions that can performed on object
// let str="Ninja";
// console.log(str.abc())//stringmethod
//trim()
let s = "  jndusnx  ";
s = s.trim();
s = s.toUpperCase(); 
console.log(s);     
//Arrays
let array=[2,4,1,4,7,9]
array.push(100);
array.shift();
array.unshift("num")
console.log(array)
let follower=['aani','baani','caani','daani']
let blocked=follower.shift();
console.log(blocked)
console.log(follower)
let follower_added=follower.unshift("ninja")
console.log(follower);
console.log(follower.indexOf('baani'))
console.log(follower.includes("audi"))
console.log(follower.concat(array))
console.log(follower.reverse())
//qs
//loops
for (let i = 1; i <= 15; i += 2) {
    console.log(i)
}
//print even numbers 2to10
for (let i=2;i<=10;i+=2){
    console.log(i)
}
for (let i=2;i<=10;i++){
    if(i%2===0){
        console.log(i);
    }
}
//table
let n = Number(prompt("Enter a number"));
for (let i = n; i <= n * 10; i += n) {
    console.log(i);
}
//nested loops
for(let i=1; i<=3;i++){
    for(let j=1; j<=3; j++){
        console.log(j)
    }
}
//here in git ignore file named .gitgnore is untracked.
//file inside the ignore are untracked 
//to make them racked we use ! here when git add . file named with !filename will be tracked

//while loop
let i=1
while (i<=5){
    console.log(i);
    i++
}
//game with while loop
const fav_movie="Spider Man"
let guess=prompt("Guess my favorite movie");
while((guess.toLocaleLowerCase()!=fav_movie.toLowerCase()) && (guess.toLowerCase()!='quit')){
    guess=prompt("wrong..try again!!");
}
if (guess.toLowerCase()===fav_movie.toLowerCase()){
    console.log("congrats..")
}
//loops with arrays
let arr=["apple","ball","cat","dog","egg","fish",'hen']
for(let i=0;i<arr.length;i++){
    console.log(i,arr[i]);
}
let animals = [
    ["cat", "dog"],
    ["lion", "tiger"],
    ["eagle", "sparrow"]
];

console.log(animals[0][1]); // dog
console.log(animals[2][0]); // eagle
// for of collections
let fruits = ["apple", "Banana", "cherry", "Dragon fruit"];

for (fruit of fruits) {
    console.log(fruit);
}
//object leterals
//are used to store keyed value pair and complex entries
const student={
    Name:"Thoufeeq",
    age:21,
    blood_grp:"O+"
}
const post={
    username:"FuryToxic",
    content:"save india from corrupted leaders",
    likes:172791,
    reposts:55003,
    tags:8573
}
//in js if number is given as key then js automatically converts it to string
const obj={
    1:"w",
    2:"h",
    null:"hd"
}//here if obj[1] it will consider 1 as string not as the index
//add new key value
obj.cost=20;
//object of object (nested objests)
const socialInfo={
    Iqbal:{
        id:"@ias",
        follower:900990,
        following:2832,
        posts:537,
        bio:"ntg",
    },Riyaz:{
        id:"@riyaz",
        followers:8787298,
        followings:737,
        post:83,
        bio:"papa ka magar mach"
    },Frahan:{
        id:undefined,
        followers:null,
        followings:null,
        post:null,
        bio:"empty(new id)"
    }
}
//Array of objects
const arrayobj = [{
    Iqbal: {
        id: "@ias",
        followers: 900990,
        followings: 2832,
        posts: 537,
        bio: "ntg",
    },
    Riyaz: {
        id: "@riyaz",
        followers: 8787298,
        followings: 737,
        posts: 83,
        bio: "papa ka magar mach",
    },
    Frahan: {
        id: null, // or a placeholder string
        followers: null,
        followings: null,
        posts: null,
        bio: "empty(new id)",
    }
}];
//to access
arrayobj[1].id;//here @riyaz is accessed
//maths
//Method,Purpose,Example,Output
//Math.abs(x),Returns the absolute (positive) value of x,Math.abs(-10),10
//"Math.pow(x,y)",Raises x to the power of y,"Math.pow(2,3)",8
//Math.floor(x),Rounds x down to (nearest smallest integer),Math.floor(4.9),4
//Math.ceil(x),Rounds x up to (nearest larger integer),Math.ceil(4.1),5-----ceiling
//Math.random(),Returns a random number between 0 and 1,Math.random(),e.g. 0.374
//random
Math.floor(Math.random()*10)+1;//+1 because the number will not print the last number i.e 10
//function
function nameOfFunction(){
    console.log("hello, This is how function usedd in js");
}
nameOfFunction()
function isAdult(){
    if(age==18){
        console.log("You are adult");
    }else{
        console.log("You are not an adult yet");
    }
}
isAdult()