//  question 1
//function dateAndtTime(){
//     let date =new Date();
//     alert(date)
// }
// dateAndtTime();

//question 2

// function fullName(){
//     let fName=prompt("Enter your First Name")
//     let lName=prompt("Enter your Last Name")
//    alert(`Hello Mr: ${fName} ${lName}`)
// }
// fullName()

//question 3
// function sum(){
//     let first=Number(prompt("Enter first number.."));
//     console.log(first);
//     let second=Number(prompt("Enter second number.."));
//     console.log(second);
//     let total=(first+second);
//     alert(`sum of ${first } and ${ second } number is ${total}`);
// }
// sum();

//question 4
// let val1=Number(prompt("enter first value.."))
// let sign=prompt("enter operator..")
// let val2=Number(prompt("enter second value.."))
// function sum(val1,val2,sign){
//     if(sign==='+'){
//         alert(`${val1} ${sign} ${val2 } = ${val1+val2}`)
//     }
//     else if(sign==='-'){
//         alert(`${val1} ${sign} ${val2 } = ${val1-val2}`)
//     }
//     else if(sign==='*'){
//         alert(`${val1} ${sign} ${val2 } = ${val1*val2}`)
//     }
//     else if(sign==='/'){
//         alert(`${val1} ${sign} ${val2 } = ${val1/val2}`)
//     }
//     else if(sign==='%'){
//         alert(`${val1} ${sign} ${val2 } = ${val1%val2}`)
//     }
// }
// sum(val1,val2,sign)

//question 5

// let n1 = Number(prompt("Enter Number.."));
// let n2 = Number(prompt("Enter Number.."));
// // console.log(num);

// function Squ(number,number2) {
//   return number * number2;
// }
// let result = Squ(n1,n2);
// alert(result);

// // question 6
// let num = Number(prompt("ENter NUmber..."));
// let myNum = 1;

// for (i = num; i > 1; i--) {
//   myNum = myNum * i;
// }
// alert(`${num} : factorial is ${myNum}`);
//question 7
// let sNum=Number(prompt("Enter start Number.."))
// console.log(`start number : ${sNum}`)
// let lNum=Number(prompt("Enter last Number.."))
// console.log(`start number : ${lNum}`)
// let result;
// function table(){
//     if(sNum<lNum){
//     for(let i=sNum; i<=lNum; i++){
//         console.log(i)
//        document.write(`${i } <br>`)
//     }
// }else{
//      alert("ERROR!")
// }
// }
// table()

//question 8

// let hypo;
// let base=Number(prompt("Enter Base Value :"))
// let per = Number(prompt("Enter perpendicular Value :"));
// function CallHypo(numb1,numb2){
//     console.log(numb1*numb1+numb2*numb2)
//     // console.log(hypo)

// }
// function sq(number){
//     Math.sqrt(number)
//     console.log(hypo)
// }

// // sq(hypo)
// CallHypo(base,per)

// let hypo;
// let base = Number(prompt("Enter Base Value :"));
// let per = Number(prompt("Enter perpendicular Value :"));
// function calhypo(number1, number2) {
//   console.log(base);
//   console.log(per);
//   hypoSqr = base * base + per * per;

// }
// function square(number) {
//   hypo = Math.sqrt(hypo);
//   console.log(hypo);
//   alert(`hypotenuse of right angle triangle is  ${hypo}`);
// }
// calhypo(base, per);
// square(base, per);

//question 9

//Arguments as value
// let area;
// let width=90;
// let height=29;
// function findArea(numb1,numb2){
//     area=Number(width*height);
//     console.log(area)
//     alert(area)
// }
// findArea(90,29)

// Arguments as variables

// let area;
// let width=90;
// let height=29;
// function findArea(numb1,numb2){
//     area=Number(width*height);
//     console.log(area)
//     alert(area)
// }
// findArea(width,height)

//question 11
// let Name=prompt("Enter Your String");
// function String(number) {
//     let para = number.split(" ");
//     console.log(para)
//     for(let i = 0; i< para.length; i++){
//         console.log(i)
//        para[i] = para[i].charAt(0).toUpperCase() + para[i].slice(1);
//        console.log(para[i])
//     }
//  alert(para.join(" "));
//  }
//  String(Name)

//question 10

// let userInput = prompt("Please Enter value :");
// let leng = userInput.length;
// let x = true;
// function palindrom(string, string2) {
//   for (let i = 0; i < string2 / 2; i++) {
//     if (string[i] !== string[string2 - 1 - i]) {
//       alert("It's not Palindrom......");
//       x = false;
//       break;
//     }
//   }

//   if (x === true) {
//     alert("It's Palindrom......");
//   }
// // }

// palindrom(userInput, leng);

// // question 12

// function findLonest(String){
//   let spl=String.split(' ')
//   let longest=spl[0];
//   for(let i=1;i<spl.length; i++){
//     if(spl[i].length>=longest.length){
//       longest=spl[i]
//     }
//   }
//   alert(longest)
// }
// let input=prompt("please enter string...");
// findLonest(input);

// // question 13

// let str = prompt("Please enter string...");
// console.log(str)
// let find =prompt("Enter character what you want to find...");
// console.log(find)
// let count = 0;
// let spl = str.split("");

// function findWord(arr,char){
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === char) {
//     count++;
//   }
// }
// alert(`${find}: found in string ${count} times`);
// }
// findWord(spl,find)

// //  question 14
// let radius = Number(prompt(`Enter Radius value...`));
// let cercum;
// let area;
// function calCercumFerence(number) {
//   cercum = number * 2 * Math.PI;
//   alert(`The CercumFerence of circle is : ${cercum}`);
// }
// function calArea(number) {
//   area = Math.PI * (number * number);
//   alert(`The Area of circle is : ${area}`);
// }
// calCercumFerence(radius);
// calArea(radius);

// function task
// let arr = prompt("plzz enter number..");
// console.log(arr);
// function reverseNum(num) {
//   num = num.split("").reverse().join("");
//   alert(num);
// }
// reverseNum(arr);

// question 2

// let str = String(prompt("Enter String Value...."));
// let Vowel = 0;
// function countVowel(string){
// // debugger
// console.log(string);
// for (let i = 0; i <= string.length; i++) {
//   if (
//     string.charAt(i) === "a" ||
//     string.charAt(i) === "e" ||
//     string.charAt(i) === "i" ||
//     string.charAt(i) === "o" ||
//     string.charAt(i) === "u"
//   ) {
//     Vowel++;
//   }
// }
// alert(Vowel);
// }
// countVowel(str)

//question 3 prime number
// let num = Number(prompt("Enter Number.."));
// let x = 2;
// console.log(num);
// function findPrime(number){
// for (let i = 0; i <= number; i++) {
//   if (number % x == 0) {
//     x++;
//     alert(`${number} is not  a prime number`);
//     break;
//   } else {
//     alert(`${number} is a prime number`);
//     break;
//   }
// }
// }
// findPrime(num)

// chp 38-42
// question 2
// let userInput = Number(prompt("Enter Any Year..."));
// console.log(userInput);
// let check;

// function findLeap(num) {
//   if (num % 4 == 0 && num % 100 != 0) {
//     check = true;
//     if (check === true) {
//       alert(userInput +" Is Leap Year...");
//     }
//   } else {
//     alert(userInput +" Is Not Leap Year...");
//   }
// }
// findLeap(userInput);

//question 4
// let tot_sub = Number(prompt("Enter you total subject counting"));
// console.log(tot_sub);
// let sub1 = Number(prompt("ENter First Subject Marks.."));
// console.log(sub1);
// let sub2 = Number(prompt("ENter second Subject Marks.."));
// console.log(sub2);
// let sub3 = Number(prompt("ENter third Subject Marks.."));
// console.log(sub3);
// let obtained = sub1 + sub2 + sub3;
// let total = 300;
// let avg;
// let per;
// function cal() {
//   percentage();
//   average();
// }
// function percentage() {
//   per = (obtained / total) * 100;
//   alert(`your percentage is ${per}%`);
// }
// function average() {
//   avg = obtained / tot_sub;
//   alert(`your average is ${avg}`);
// }
// cal();

let str=prompt("Enter String...")
console.log(str)