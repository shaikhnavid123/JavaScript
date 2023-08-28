	/*
		// alert("Hello Friends")

		// 1. JavaScript console API (Application Programming Interface)

		// 2. Ways to print in JavaScript
		console.log("Hello World!", 4+6, "Another log")

		console.warn("this is warning")
		console.error("this is an error")

		// 3. Document functions
		document.write("this is document.write()")
		document.getElementsById("#btn2")
		document.getElementsName("")
	*/

// JAVASCRIPT VARIABLES : 00:53:36
// var number1 = 40;
// var number2 = 50;
// console.log(number1+number2)

// 4. Data types in JavaScript : 1:00:00 ----------------------------------------------------------------------------------------------------------------->

/*
At a very high level, there are two types of data types	in JavaScript
1. Primitive data type : undefined, null, number, string, boolean, symbol
2. Reference data type : Arrays and Objects
*/

// 1. Primitive data type :
// a) Numbers :
// varnum1 = 564;
// varnum2 = 86.6;
// console.log(varnum1 + varnum2)

// b) String :
// var str1 = "This is a string"
// var str2 = 'This is also a string'

// console.log(str1, "\n", str2)

// c) Boolean :
// a = true; 
// b = false;
// console.log(a, b)
// console.log(a == b)

// d) Symbol :

// e) Undefined :

// var und = undefined;
// console.log(und)
// console.log(undefined)

// var und0;
// console.log(und0)

// f) Null :
// var n = null;
// console.log(n)

// 2. Reference data type :

// a) Objects :
// var marks = {
// 	elliot : 65,
// 	alderson : 84,
// 	rami : 54,
// 	harry : 87
// }
// console.log(marks)
// console.log(marks['rami'])

// b) Arrays :

// var arr = [1, 2, "Navid", 4, 5]
// console.log(arr)
// console.log(arr[2])


// OPERATORS IN JAVASCRIPT : 1:14:30 --------------------------------------------------------------------------------------------------------------------->

// 1. Arithmatic Operatiors :
// var a = 100; // here '100' is operend an and '+' is operator
// var b = 10;
// console.log("The value of a + b is ", a+b)
// console.log("The value of a - b is ", a-b)
// console.log("The value of a * b is ", a*b)
// console.log("The value of a / b is ", a/b)

// 2. Assignment Operators :
// var c = b;
// // c += 2;
// // c -= 2;
// // c *= 2;
// c /= 2;
// console.log(c)

// 3. Comparison Operators :
// var x = 56; 
// var y = 87;
// console.log(x==y)
// console.log(x<=y)
// console.log(x>=y)
// console.log(x>y)
// console.log(x<y)

// 4. Logical Operators :

// a) Logical AND :
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// b) Logical OR :
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// c) Logical NOT :
// console.log(!false)
// console.log(!true)


// FUNCTIONS : 1:23:00 ----------------------------------------------------------------------------------------------------------------------------------->

// function avg(a, b){
// 	return (a+b)/2;
// }
// c1 = avg(4, 6)
// c2 = avg(45, 50)
// console.log(c1, c2)

// NOTE : in console of any brower the integer are shown or appeared as blue coloured whereas strings as black

// CONDITIONS IN JAVASCRIPTS : 1:30:00 ------------------------------------------------------------------------------------------------------------------->

/*
var age = 19;
// single if statement :
if(age > 18){
	console.log("You are eligible for driving Bike, Car, etc.")
}

// if else statement :
if(age > 18){
	console.log("You are eligible for driving Bike, Car, etc.")
}
else{
	console.log("You are not eligible for driving Bike, Car, etc.")
}

age = 18
// if else ladder :
if(age > 18){
	console.log("You are eligible for driving Bike, Car, etc.")
}
else if(age = 18){
	console.log("You are not probably eligible for driving Bike, Car, etc.")
}
else{
	console.log("You are not eligible for driving Bike, Car, etc.")
}
*/

// FOR LOOPS : 1:38:00--------------------------------------------------------------------------------------------------------------------------------------->

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr)
// for(var i=0; i<arr.length; i++){
// 	if(i==2){
// 		// break;
// 		continue;
// 	}
// 	console.log(arr[i])
// 	}
// 
// arr.forEach(function(x){
// 	console.log(x);
// })


//// x = [0]
//// for(var i=0; i<x; i--){
//// 	console.log(x[i])
// }

// const ac=0; // const is used to fix the value stored in variable, that value can't be changed anyhow
// ac++
// ac = ac+1;
// console.log(ac)

// WHILE LOOP : 1:43:45--------------------------------------------------------------------------------------------------------------------------------------->

// let j=0;
// let j=10;

//  while(j<arr.length){
// 	console.log(arr[j]);
// 	j++;
// }

// do {
// 	console.log(arr[j])
// 	j++;
// }
// 	while(j<arr.length)

// 	ARRAY METHODS : 1:49:25 ------------------------------------------------------------------------------------------------------------------------------>

// The Array object, as with arrays in other programming languages, enables storing a 
// collection of multiple items under a single variable name, and has members for performing
// common array operations. 

// let myArr = ["Fan", "Camera", 12, null, true];

// console.log(myArr.length)
// myArr.pop() // pop() function removes the last element of the array
// myArr.push("Elliot") // push() adds' element(s) in the array at last
// myArr.shift() // shift() function removes the first element of the array
// myArr.unshift("Harry") // unshift() adds' element(s) in the array at begining 
// console.log(myArr)

// const newLen = myArr.unshift("Rami")
// console.log(newLen)
// console	.log(myArr)

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// STRING METHODS :  1:55:30--------------------------------------------------------------------------------------------------------------------------------->

// let myStr = "Elliot is a smart boy smart smart";
// console.log(myStr.length)
// console.log(myStr.indexOf("smart"))
// console.log(myStr.lastIndexOf("smart"))

// console.log(myStr.slice(0, 6))
// console.log(myStr.slice(12, 17))

// console.log(myStr.replace("Elliot", "Rami"))
// d = console.log(myStr.replace("Elliot", "Rami"));
// console.log(d)

// d = myStr.replace("Elliot", "Rami");
// d = d.replace("smart", "intelligent");
// console.log(d)


// DATA AND TIME : 2:00:00 ------------------------------------------------------------------------------------------------------------------------------>

// myDate = new Date()
// console.log(myDate)
// console.log(myDate.getTime()) // shows time in seconds
// console.log(myDate.getFullYear()) // shows the current year
// console.log(myDate.getDay()) // shows the of the week
// console.log(myDate.getMinutes()) // shows the minute in the current time
// console.log(myDate.getHours()) // shows the current hour


//  DOM(Document Object Model) MANIPULATION : 2:03:00 ---------------------------------------------------------------------------------------------------->

// you can perform or add CSS by targeting the elements
// let elemId = document.getElementById('click');
// console.log(elemId);

// let elemClass = document.getElementsByClassName('container')
// console.log(elemClass)

// elemClass[0].style.background = "lightblue";
// elemClass[0].style.font-f = "tahoma";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.remove('bg-primary')

// elemClass[0].innerHTML = "HELLO"
// elemClass[0].innerText = "replaced text"

// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// tn = document.getElementsByTagName('div')
// // tn = document.getElementsByTagName('button')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerHTML = "This is a created para"
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerHTML = "This is a created bold"
// tn[0].replaceChild(createdElement2, createdElement2t)
// removeChild(element) ---> removes an element

// DOCUMENT FUNCTIONS/METHODS : 2:22:22 ------------------------------------------------------------------------------------------------------------------>
// This can be run in browser's console only
// document.title
// document.URL
// document.domain
// document.scripts 
// document.links // for extracting
// document.images // for extracting images from the web page
// document.forms

// Selecting using query 
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// Events in JavaScirpt : 2:28:23 ------------------------------------------------------------------------------------------------------------------------>

// function clicked(){
// 	console.log("The button was clicked")
// }
// window.onload = function(){
// 	console.log("The document was loaded")
// }

// this function only works on id 
// firstContainer.addEventListener('click', function(){ 
// 	document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>"
// 	console.log("Click has been succeed")
// })

// firstContainer.addEventListener('mouseover', function(){ 
// 	console.log("Mouse on container")
// })

// firstContainer.addEventListener('mouseout', function(){ 
// 	console.log("Mouse out of container")
// })

// let prevHTML = document.querySelectorAll('.container')[0].innerHTML;
// firstContainer.addEventListener('mouseup', function(){ 
// 	document.querySelectorAll('.container')[0].innerHTML = prevHTML;
// 	console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function(){ 
// 	document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>";
// 	console.log("Mouse down when clicked on container");
// })

// Arrow Function :
// function sum(a, b){
// 	return a+b;
// }
// summ = (a, b) =>{
// 	return a+b;
// }

// SetTimeout and Setinterval : 2:38:00 --------------------------------------------------------------------------------------------------------------------->

// doLog = ()=>{
// 	document.querySelectorAll('.container')[0].innerHTML = "<b> Set Interval Fired </b>";
// 	console.log("I am log");
// }

// setTimeout(doLog, 2000);
// clr = setTimeout(doLog, 7000); // stops the program(timeout) before its done by typing clearTimeOut(clr) in console 
// setInterval(doLog, 2000);
// clr = setInterval(doLog, 2000); // stops the program(interval) by typing clearInterval(clr) in console 
// use clearTimeout(clr)/clearInterval(clr) to cancel setInterval/Timeout 

// JavaScript locatStorage : 2:43:30 --------------------------------------------------------------------------------------------------------------------------------->

// localStorage // this comand will only runs in console
// localStorage.setItem('name', 'harry')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()

// JSON (JavaScript Object Notation) : ------------------------------------------------------------------------------------------------------------------------------->
// JSON is a lightweight data-interchange format. It is easy for humans to read and write.
// It is easy for machines to parse and generate.
// It is based on a subset of the JavaScript Programming Language Standard ECMA-262.

// obj = {name: 'harry', length: 1, a: {this: 'tha"t'}}; // JSON only supports double quotes, but JS obj accepts single quotes
// jso = JSON.stringify(obj); // once anything becomes string then you can transport it easily 

// console.log(obj)
// console.log(typeof obj)
// console.log(jso)
// console.log(typeof jso)

// parsed = JSON.parse('{"name":"harry","length":1,"a":{"this":"that"}}')
// console.log(parsed)


// Template Literals - Backticks (`${}`) : 2:57:00 ------------------------------------------------------------------------------------------------------------------------------------------>

// a = 34
// console.log(`this is my ${a}`)