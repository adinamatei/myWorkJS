// The multiple of 3 or 5 sum
function calculateSum() {
	var sum = 0;
    for (var numar=0; numar<1000; numar++) {
	  	if (numar % 3 === 0 || numar % 5 === 0)  {
			// sum = sum + numar;
			// sau
			sum += numar;
		}
	}
	return sum;
}
document.getElementById('sum').innerHTML = calculateSum();


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
document.getElementById('even').innerHTML = myArray([2, 7, 6, 9, 8]);


// Sum function of an array
function deepSum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
  		var newArray = arr[i];
  		for (var x = 0; x < newArray.length; x++) {
    		sum += newArray[x];
  		}
	}
	return sum;
}
document.getElementById('deepSum').innerHTML = deepSum([[1,2], [4,5], [10]]);


// Reverse a string
function reverseString(str) {
	var reverse = '';
	for(var i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse;
}
document.getElementById('reverse').innerHTML = reverseString("hello");


// Split a string
function splitString(asd) {
	var asd = asd.split(' ');
	return asd;
}
document.getElementById('splitStr').innerHTML = splitString("I have fun programming !");


//Factorialize a Number
function factorialize(num) {
	// fact = 1
	// for (var i = 1; i <= num; i++) {
	// 	fact = fact * i;
	// }
	// console.log(fact);
	// return fact;
 if (num === 0) {
 	return 1;
 }
 return num * factorialize(num - 1); // recursive function - se apeleaza pe ea insasi
}
document.getElementById('factorial').innerHTML = factorialize(10);


//Palindrome function
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, ''); // modiffy the string with lowercase and ignor the marks
  for (var i = 0, len =str.length - 1; i < len / 2; i++) { //calculate the string length and i takes value up to half
  	if (str[i] !== str[len-i]) { //compare if str[0]=str[last], [1]=[last-1], [2]=[last-2]
  		return false;
  	}
  }
  return true;
}
document.getElementById('palindrome').innerHTML =  palindrome("raCeCar");


//Find the Longest Word in a String
function findLongestWord(str) {
  str = str.split(' ');
	// console.log(str);
  var wordLength = 0;
  for (var i = 0; i < str.length; i++){
  	if (str[i].length > wordLength) {
  		wordLength = str[i].length;
  	}
  }
  return wordLength;
}
document.getElementById('longestWord').innerHTML = findLongestWord("The quick brown fox jumped over the lazy dog");


//Max and min of an array
function maxNumber(anArray) {
	var max = anArray[0];
	for (var i = 0; i < anArray.length; i++){
		if (max < anArray[i]){
		max = anArray[i];
		}
	}
	return max;
}
function minNumber(anArray) {
	var min = anArray[0];
	for (var i = 0; i < anArray.length; i++) {
		if (min > anArray[i]) {
			min = anArray[i];
		}
	}
	return min;
}
document.getElementById('minMaxNumber').innerHTML = "The max number of the array is: " + maxNumber([2, 6, 9, 3, 1, 4])
+ ", and the min number of the array is: " + minNumber([2, 6, 9, 3, 1, 4]);


//First letter of each word capitalize
function titleCase(string) {
	var arrStr = string.split(' ');
	for (var i = 0; i < arrStr.length; i++) {
		var word = arrStr[i].toLowerCase().split('');
		word[0] = word[0].toUpperCase();
		arrStr[i] = word.join('');
	}
	return arrStr.join(' ');
}
document.getElementById('upperCase').innerHTML = "Capitalized title: " + titleCase("I'm a little tea pot");


//Return largest number in arrays
function largestOfFour(arr) {
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
}
document.getElementById('maxOfArray').innerHTML =largestOfFour([[4, 5, 1, 3],
[13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


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
function repeatStringNumTimes(str, num) {
	var str = document.getElementById('repeatStr').value;
	var num	= document.getElementById('repeatNum').value;
	var newStr = "";
	if (num > 0) {
		for (var i = 1; i <= num; i++) {
			newStr += str + " ";
		}
	}
	return document.getElementById('repeatString').innerHTML = newStr;
}


//Truncate a string
function truncateString(str, num) {
	var num = document.getElementById('truncateNum').value;
	var str= document.getElementById('truncateStr').innerHTML;
	var theTruncate = "";
  for (var i = 0; i < str.length; i++) {

  	if (str.length > num) {
  		if (num > 3) {
  			theTruncate = str.slice(0, num - 3) + ("...");
  			// return theTruncate + ("...");
  		}
			else {
				theTruncate = str.slice(0, num) + ("...");
				// return theTruncate + ("...");
			}
		}
		else if (num >= str.length) {
			theTruncate = str;
			// return thetTruncate;
		}
	}
	// console.log(theTruncate);
	return document.getElementById('truncate').innerHTML = theTruncate;

}
// console.log(truncateString("A-tisket a-tasket A green and yellow basket",
// 10));


// The matrix
	//Calculate the sum of matrix
	function sumMatrix(arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				sum = sum + arr[i][j];
			}
		}
		return sum;
	}
	// console.log(sumMatrix([[1, 7, 6], [5, 3, 8], [9, 2, 4]]));
	document.getElementById('theSum').innerHTML = sumMatrix([[1, 7, 6], [5, 3, 8], [9, 2, 4]]);

	// Sum of columns
	function sumColumn(arr) {
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
	}
	document.getElementById('sumOfColumns').innerHTML = sumColumn([[1, 7, 6], [5, 3, 8], [9, 2, 4]]);

	// sum of diagonals
	function sumDiagonal(arr) {
		var total = [];
		sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i][i];
		}
		total.push(sum);
		sum = 0;

		var row = arr.length;
		for (var i = row-1, j = 0; i < row, j < row; i--, j++) {
			sum += arr[i][j];
		}
		total.push(sum);
		return total;
	}
	// console.log(sumDiagonal([[1, 7, 6], [5, 3, 8], [9, 2, 4]]));
	document.getElementById('sumOfDiagonals').innerHTML = sumDiagonal([[1, 7, 6], [5, 3, 8], [9, 2, 4]]);

	// The sum above and below the diagonal
	function halfSum(arr){
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
	}
	// console.log(halfSum([[1, 7, 6], [5, 3, 8], [9, 2, 4]]));
	document.getElementById('aboveDiagonal').innerHTML = halfSum([[1, 7, 6], [5, 3, 8], [9, 2, 4]]);


//Even Fibonacci numbers
function fibonacci() {
	var fiboNumber = [1, 2];
	var i = 2;
	var sum = 0;
	var newVal = 0;
	while ((fiboNumber[i-2] + fiboNumber[i-1]) < 4000000) {
		newVal = fiboNumber[i-2] + fiboNumber[i-1];
		fiboNumber.push(newVal);
		i++;
	}
	// console.log(fiboNumber);
	// loop over fiboNumber
	for (i = 0; i < fiboNumber.length; i++) {
		if (fiboNumber[i] % 2 === 0) {
			sum += fiboNumber[i];
		}
	}
	return sum;
}
// console.log(fibonacci());
document.getElementById('fibonacci').innerHTML = fibonacci();

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
// console.log(primeFactor(600851475143));
document.getElementById('prime').innerHTML = primeFactor(600851475143);
