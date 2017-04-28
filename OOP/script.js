// Private and Public properties and methods

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
		return privateMethod() + " has " + this.age + " years old.";
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



// Encapsulation and Inheritance
var Student = function(firstName, secondName, email){
	
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
	},
	getInfo: function(){

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



//Polymorphism 

var Animal = function() {};

Animal.prototype.says = function() {
	return "I am an animal"; 
};

var Dog = function() {};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.says = function() {
	return "I am a dog";
};

var Cat = function() {};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.says = function() {
	return "I am a cat";
};

var Horse = function() {};
Horse.prototype = Object.create(Animal.prototype);

var animal = [new Animal(), new Dog(), new Cat(), new Horse() ];

for (var i = 0; i < animal.length; i++) {
	console.log(animal[i].says());
}



// Classes and Inheritance in ECMAScript 6  

class People {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}
	getInfo() {
		return "Hello, my name is " + this.name + " and my age is " + this.age + ".";
	}
}

class Person extends People {
	constructor(name, age, ocupation) {
		super(name,age);
		this.ocupation = ocupation;
	}
	//override
	getInfo() {
		return super.getInfo() + " My ocupation is " + this.ocupation + ".";
	}
}

var pers1 = new Person ('John', 30, 'web developer');
console.log(pers1.name);
console.log(pers1.getInfo());