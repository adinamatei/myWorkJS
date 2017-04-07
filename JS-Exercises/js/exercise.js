// The multiple of 3 or 5 sum
var SumOfNumber = function() {
	var sum = 0;
    for (var numar=0; numar<1000; numar++) {
	  	if (numar % 3 === 0 || numar % 5 === 0) {
			sum += numar;
		}
	}
	return sum;
};


// Even numbers of an array
function myArray(array) {
	var result = [];
  	for (var i = 0; i < array.length; i++) {
  		if (array[i] % 2 === 0){
  			result.push(array[i]);
  		}
  	}
  	return result;
}


// Sum function of an array
var deepSum = function(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
  		var newArray = arr[i];
  		for (var x = 0; x < newArray.length; x++) {
    		sum += newArray[x];
  		}
	}
	return sum;
};


// Reverse a string
function reverseString(str) {
	document.getElementById('reverseButton').addEventListener("click", reverseAction);

	function reverseAction(){
		var str = document.getElementById("typeString").value;
		var reverse = '';
		for(var i = str.length - 1; i >= 0; i--) {
			reverse += str[i];
		}
		document.getElementById('reverse').innerHTML = reverse;
	}
}


// Split a string
function splitString() {
	document.getElementById("splitButton").addEventListener("click", splitAction);

	function splitAction(){
		var asd = document.getElementById("typeText").value;
		asd = asd.split(' ');
		document.getElementById('splitStr').innerHTML = asd;
	}
}


//Factorialize a Number
var factorialize = function(num) {
	// fact = 1
	// for (var i = 1; i <= num; i++) {
	// 	fact = fact * i;
	// }
	// console.log(fact);
	// return fact;
 if (num === 0) {
 	return 1;
 }
 return num * factorialize(num - 1);
};


//Palindrome function
var palindromeTest = function(str) {
    str = str.toLowerCase().replace(/[\W_]/g, ''); 
    for (var i = 0, len =str.length - 1; i < len / 2; i++) { 
	  	if (str[i] !== str[len-i]) { 
	  		return false;
	  	} 	
  	}
	return true;
};


//Find the Longest Word in a String
var findLongestWord = function(str) {
  str = str.split(' ');
  var wordLength = 0;
  for (var i = 0; i < str.length; i++){
  	if (str[i].length > wordLength) {
  		wordLength = str[i].length;
  	}
  }
  document.getElementById('longestWord').innerHTML = wordLength;
};



//Max and min of an array
var maxNumber = function(anArray) {
	var max = anArray[0];
	for (var i = 0; i < anArray.length; i++){
		if (max < anArray[i]){
		max = anArray[i];
		}
	}
	document.getElementById('maximum').innerHTML = max;
};
var minNumber = function (anArray) {
	var min = anArray[0];
	for (var i = 0; i < anArray.length; i++) {
		if (min > anArray[i]) {
			min = anArray[i];
		}
	}
	document.getElementById('minimum').innerHTML = min;
};


//First letter of each word capitalize
var titleCase = function (string) {
	var arrStr = string.split(' ');
	for (var i = 0; i < arrStr.length; i++) {
		var word = arrStr[i].toLowerCase().split('');
		word[0] = word[0].toUpperCase();
		arrStr[i] = word.join('');
	}
	document.getElementById('upperCase').innerHTML = arrStr.join(' ');
};


//Return largest number in arrays
var largestOfFour = function(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		var subArr = arr[i];
		var max = subArr[0];
		for (var j = 0; j < subArr.length; j++){
			if (max < subArr[j]){
				max = subArr[j];
			}
		}
		result.push(max);
	}
	return result;
};


//Confirm the Ending
function confirmEnding(str, target) {
	var myStr = str.split('');
	var myTarget = target.split('');
	// console.log(myStr, myTarget);
	for (var i = 0; i < myTarget.length; i++) {
		var x = myStr.length-1;
		var y = myTarget.length-1;
			if (myStr[x-i] !== myTarget[y-i]){
				return false;
			}
	}
	return true;
}
document.getElementById('confirmEnding').innerHTML = confirmEnding("Open sesame", "same");


//Repeat a string
function repeatStringNumTimes() {
	document.getElementById('repeatButton').addEventListener('click', repeatAction);

	function repeatAction(){
		var str = document.getElementById('repeatStr').value;
		var num	= document.getElementById('repeatNum').value;
		var newStr = "";
		if (num > 0) {
			for (var i = 1; i <= num; i++) {
				newStr += str + " ";
			}
		}
		document.getElementById('repeatString').innerHTML = newStr;
	}

	return "You must type a string and a number!";
}


//Truncate a string
function truncateString() {
	document.getElementById('readTruncate').addEventListener('click', action);
	
	function action() {
		var num = document.getElementById('truncateNum').value;
		var str= document.getElementById('truncateStr').innerHTML;
		var theTruncate = "";
	  	for (var i = 0; i < str.length; i++) {

			if (num >= 3 && num <= str.length) {
				theTruncate = str.slice(0, num-3) + ('...');
			}
			else {
				theTruncate = "Please type a number between 3 and 43";
			}

		}
		document.getElementById('truncate').innerHTML = theTruncate;
	}
}



// The matrix
	//Calculate the sum of matrix
	var sumMatrix = function(arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				sum = sum + arr[i][j];
			}
		}
		return sum;
	};

	// Sum of columns
	var sumColumn = function(arr) {
		var rez = [];
		var sum = 0;
		var row = arr.length;

		for (var i = 0; i < row; i++) {
			for (var j = 0; j < row; j++) {
				sum += arr[j][i];
			}
			rez.push(sum);
			sum = 0;
		}
		return rez;
	};

	// sum of diagonals
	var sumDiagonal = function(arr) {
		var total = [];
		sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i][i];
		}
		total.push(sum);
		sum = 0;

		var row = arr.length;
		for (var i = row - 1, j = 0; i < row, j < row; i--, j++) {
			sum += arr[i][j];
		}
		total.push(sum);
		return total;
	};

	// The sum above and below the diagonal
	var halfSum = function(arr){
		var total = [];
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr.length; j++) {
				if(j >= i) { // suma deasupra diagonalei; pt suma sub diagonala schimb semn >;
					sum += arr[i][j];
				}
			}
		}
		// total.push(sum);
		return sum;
	};


//Even Fibonacci numbers
var fibonacciNumbers = function() {
	var fiboNumber = [1, 2];
	var i = 2;
	var sum = 0;
	var newVal = 0;
	while ((fiboNumber[i-2] + fiboNumber[i-1]) < 4000000) {
		newVal = fiboNumber[i-2] + fiboNumber[i-1];
		fiboNumber.push(newVal);
		i++;
	}
	for (i = 0; i < fiboNumber.length; i++) {
		if (fiboNumber[i] % 2 === 0) {
			sum += fiboNumber[i];
		}
	}
	return sum;
};

//Even Fibonacci numbers 2
function fibonacci2() {
	var fiboNumber = [1, 2];
	var done = false;
	var i = 2;
	var sum = 2;
	var newVal;

	while(!done) {
		done = true;
		newVal = fiboNumber[i-2] + fiboNumber[i-1];

		if (newVal <= 4000000) {
			fiboNumber.push(newVal);
			i++;

			if (newVal % 2 === 0) {
				sum += newVal;
			}
			done = false;
		}
	}
	return sum;
}
// console.log(fibonacci2());


// Largest prime factor
function primeFactor(num){
	function isPrime(n) {
		for (var i = 2; i < Math.floor(Math.sqrt(n)); i++) {
			if (n % i === 0 ) { return false; }
		}
		return true;
	}
	var factor = [];
	var notPrime = false;
	for (var i = 2; i < Math.floor(Math.sqrt(num)); i++) {
		if (num % i === 0) {
			if(isPrime(i)) {
				factor.push(i);
			}
		}
	}
	var max = factor[0];
	for (var i = 0; i <= factor.length; i++) {
		if (max < factor[i]) {
			max = factor[i];
		}
	}
	return max;
}
console.log(primeFactor(600851475143));

//Sorting an array
function sortNumber (array) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < array.length; i++) {
			if(array[i] > array[i+1]){
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				swapped = true;
			}
		}
	}
	while(swapped);
	return array;
}


//////********************************
var renderList = [
	{
		id: 'sum',
		callBack: SumOfNumber,
		paramList: null
	},
	{
		id: 'even',
		callBack: myArray,
		paramList: [2, 7, 6, 9, 8]
	},
	{
		id: 'sumOfArray',
		callBack: deepSum,
		paramList: [[1,2], [4,5], [10]]
	},
	{
		id: 'reverse',
		callBack: reverseString,
		paramList: null
	},
	{
		id: 'splitStr',
		callBack: splitString,
		paramList: null
	},
	{
		id: 'factorial',
		callBack: factorialize,
		paramList: 10
	},
	{
		id: 'palindrome',
		callBack: palindromeTest,
		paramList: 'raCeCar'
	},
	{
		id: 'longestWord',
		callBack: findLongestWord,
		paramList: "The quick brown fox jumped over the lazy dog"
	},
	{
		id: 'upperCase',
		callBack: titleCase,
		paramList: "I'm a little tea pot"
	},
	{
		id:'maximum',
		callBack: maxNumber,
		paramList: [2, 6, 9, 3, 1, 4]
	},
	{
		id:'minimum',
		callBack: minNumber,
		paramList: [2, 6, 9, 3, 1, 4]
	},
	{
		id: 'maxOfArray',
		callBack: largestOfFour,
		paramList: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
	},
	{
		id: 'repeatString',
		callBack: repeatStringNumTimes,
		paramList: null
	},
	{
		id: 'truncate',
		callBack: truncateString,
		paramList: null
	},
	{
		id: 'theSum',
		callBack: sumMatrix,
		paramList: [[1, 7, 6], [5, 3, 8], [9, 2, 4]]
	},
	{
		id: 'sumOfColumns',
		callBack: sumColumn,
		paramList: [[1, 7, 6], [5, 3, 8], [9, 2, 4]]
	},
	{
		id: 'sumOfDiagonals',
		callBack: sumDiagonal,
		paramList: [[1, 7, 6], [5, 3, 8], [9, 2, 4]] 
	},
	{
		id: 'aboveDiagonal',
		callBack: halfSum,
		paramList: [[1, 7, 6], [5, 3, 8], [9, 2, 4]]
	},
	{
		id: 'fibonacci',
		callBack: fibonacciNumbers,
		paramList: null
	},
	{
		id: 'prime',
		callBack: primeFactor,
		paramList: 600851475143
	},
	{
		id: 'sort',
		callBack: sortNumber,
		paramList: [7, 1, 5, 2, 6]
	}

];

(function renderData(list) {
	for (var i=0; i<list.length;i++) {
		var elm = list[i];
		var callback = elm.callBack;
		var params = elm.paramList;
		var rezultat = callback(params);
		var id = elm.id;
		document.getElementById(id).innerHTML = rezultat;
	}
})(renderList);