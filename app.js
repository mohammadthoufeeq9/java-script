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
