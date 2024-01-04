// print command
console.log('hello');
// variables
  a=10; //non-declaring variables
  console.log(a);
  var a=10;  //variable declaration
  console.log(a);  //value of a=10
  {
var a=90;
console.log(a);  //value of a=90
}
console.log(a);  //value of a=90
let b=24;   //let is redeclare blocked scope variable
console.log(b);
{
let b=23;
console.log(b);
}
console.log(b);
b=45;
console.log(b);
const v=56;  //const is redeclare blocked scope variable
{
const v=78;
console.log(v);
}
console.log(v);
//datatypes
console.log(typeof(v));
//string
name="Arya";
console.log(name);
console.log(typeof(name));
let firstName="Rajesh";
console.log(firstName);
//boolean
let isAvailable=true;
console.log(typeof(isAvailable));
//undefined
var t;
console.log(typeof(t));
//arrays
let arr1=[1,2,3,4];
console.log(typeof(arr1));
let arr2=[1,2,3,4,"arya"];
console.log(typeof(arr2));
console.log(typeof(arr2[0]));
console.log(typeof(arr2[4]));
console.log(typeof(arr2[5]));
//operators
let x=8;
console.log(x+=7);
//Increment operator
let inc=7;
let  inc1=++inc;
console.log(inc1);
let c=4;
let d=5;
if(c>d)
{
  console.log("c is greater");
}
else if(c==d)
{
  console.log("both are equal");
}
else
{
  console.log("d is greater");
}
//functions
function addval(ad1,ad2)
{
  var sum=ad1+ad2;
  console.log('calculated sum='+sum);
}
addval(10,20);  //fn call  or
function addval(ad1,ad2)
{
  var sum=ad1+ad2;
  return sum;
}
var result=addval(100,20);
console.log('calculated sum='+result);
//subtraction
function subval(num1,num2)
{
  var dif=num1-num2;
  console.log('calculated difference='+dif);
}
subval(100,20); 
//multiplication
function mulval(mul1,mul2)
{
  var pro=mul1*mul2;
  console.log('calculated product='+pro);
}
mulval(10,2); 
//division
function divval(div1,div2)
{
  var quo=div1/div2;
  console.log('calculated quotient='+quo);
}
divval(50,2); 
//Looping stmnts
//write a pgm to pri nting the nos from 1 to 10
for (let i=0;i<10;i++) {
  console.log(i+1)
  }
  //create an array with 5 elements and print all the elements in the array
  let arr3=["arya","ajith","suma","anil","rajesh"];
  for (let i= 0; i< arr3.length; i++) {
    console.log(arr3[i]);
    }
    //for of loop
    let arr4=[1,2,3,4,5];
    for (x of arr4)
    {
      console.log(x);
    }
    // for in loop
    let person={name:"Arya",age:"27"}
    for (x in person)
    {
      console.log(person[x]);
    }
    //while loop
    let j=1;
    while (j<=10) {
      console.log(j);
      j++;
    }