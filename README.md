# myWorkJS


This repository contains some of my practice with JavaScript.
In JS-Exercises folder I've made some altgorithmic challenges from freecodecamp.com and projecteuler.net. 
The JS-CNP folder contains a JavaScript problem, that verify if a SSN(CNP) is valid, based on user's birth date. 

# Object Oriented Programming in JavaScript

To better understand Object Oriented Programming in JavaScript, I have experimented with the most important concepts. Here are a few examples:

*Private and Public Properties and Methods

The private properties (privateName) and method (privateMethod) are available only inside the Employee() constructor, and the public properties (age) and methods (setName() and getName()), are available both inside and outside the Employee() constructor.

```javascript
var Employee = function(name, age) {
	//private propertie
	var privateName = name;
	// public properties
	this.age = age;

	//private method
	var privateMethod = function(){
		return privateName;
	};

	//privileged method
	this.getName = function(){
		return privateMethod() + " has " + this.age + " age old.";
	};

	//public method
	this.setName = function(name){
		privateName = name;
	};
};

var employee = new Employee("John", 37); 
console.log(employee.getName());
employee.age = 30;
employee.setName('Ben');
console.log(employee.getName()); 
``` 

* Encapsulation and Inheritance

The main OOP concepts in JavaScript are: the encapsulation - creating objects, especially with constructor Functions (class in ES6); and the inheritance - allowing objects to inherit properties and methods from the parent object. 
In this example, all the functionality of a Student object is encapsulated  inside the Student constructor, and each instance of Student inherits prototype methods like changeEmail(), average() etc.

```javascript
// Encapsulation and Inheritance
var Student = function(firstName, secondName, email){
	// Initialize the instance properties
	this.firstName = firstName;
	this.secondName = secondName;
	this.email = email;
	this.averageGrade = [];
	this.finalGrade = 0;
};

//overwriting the prototype property with an object literal 
Student.prototype = {
	constructor: Student,
	name: function(){
		return this.firstName + " " + this.secondName;
	},
	average: function(grade, credits){
		var theGradeCalculation = grade * credits;
		this.averageGrade.push(theGradeCalculation);	
	},
	showTheGrades: function(){
		return this.averageGrade.join(",");	
	},
	changeEmail: function(newEmail){
		this.email = newEmail; 
	},
	getMail: function(){
		console.log("The new Email: " + this.email);
	}	
};

//Created intances of the Student object
var firstStudent = new Student("John", "Brown", "john@gmail.com");
firstStudent.average(10, 5);
firstStudent.changeEmail("john123@gmail.com");
firstStudent.getMail();
firstStudent.average(9, 4);
console.log("Name: " + firstStudent.name() + "," + " Grades: " + firstStudent.showTheGrades());

var secondStudent = new Student("Tom", "Patterson", "tomprince@mail.com");
secondStudent.average(9, 5);
secondStudent.average(7, 4);
console.log("Name: " + secondStudent.name() + "," + " Grades: " + secondStudent.showTheGrades());
```