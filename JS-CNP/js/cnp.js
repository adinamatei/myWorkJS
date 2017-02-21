document.addEventListener("DOMContentLoaded", function(event) {

	var element = document.getElementById("btn");
	element.addEventListener('click', function() {



		var cnp = document.getElementById('cnp').value;
		var message = document.getElementById('message');
		var day = document.getElementById('day').value;
		var month = document.getElementById('month').value;
		var year = document.getElementById('year').value;
		// TODO: CHECK THAT THE VALUES ARE NOT EMPTY
		if(cnp.length === 0) {
			message.innerHTML = "The cnp is empty! Please try again!";
			return false;
		}

		if(day.length === 0) {
			message.innerHTML = "The day is empty! Please try again!";
			return false;
		}

		if(month.length === 0) {
			message.innerHTML = "The month is empty! Please try again!";
			return false;
		}

		if(year.length === 0) {
			message.innerHTML = "The year is empty! Please try again!";
			return false;
		}

		if(checkCnp() && validate(day, "day") && validate(month, "month") && validate(year.slice(2), "year")) {
			message.innerHTML = "CNP is valid!";
		}





		function checkCnp() {
			var digit = '0123456789';

			if(cnp.length === 13) {
				
				for (var i = 0; i < cnp.length; i++) {
		
					if (digit.indexOf(cnp[i]) === -1) {
						// valid = false;
						// break;
						message.innerHTML = "Your CNP is not a number!";
						return false;
					}
				}
				return true;
			} else {
				message.innerHTML = "Your CNP is too short!";
				return false;
			}
		}

		function validate(value, type) {
		
			if (type === 'day') {
				var range = { from: 5, to: 7 };
				var limit = { start: 1, end: 31 };
			}
			if (type === 'month') {
				var range = { from: 3, to: 5 };
				var limit = { start: 1, end: 12 };
			}
			if (type === 'year') {
				var range = { from: 1, to: 3 };
				var limit = { start: 1, end: 2017 };
			}


			var cnpVal = parseInt(cnp.slice(range.from, range.to));
			// console.log('CNP DAY =', cnpDay);
		
			var userValue = parseInt(value);

			if (userValue < limit.start || userValue > limit.end) {
				message.innerHTML = type.toUpperCase() + " entered is not valid";
				return false;
			}

			if (cnpVal !== userValue) {
				message.innerHTML = type.toUpperCase() + " entered is not a match with the CNP";
				return false;
			}
			return true;

		}



		// checkCnp();

		// function validateDay() {
		// 	var cnpDay = parseInt(cnp.slice(5,7));
		// 	// console.log('CNP DAY =', cnpDay);
		// 	var dayValue = parseInt(day);
		// 	// console.log('day value =', dayValue);
		// 	if (dayValue < 1 || dayValue > 31) {
		// 		message.innerHTML = "Day entered is not valid";
		// 		return false;
		// 	}
		// 	if (cnpDay !== dayValue) {
		// 		message.innerHTML = "Day entered is not a match with the CNP";
		// 		return false;
		// 	}
		// 	return true;
		// }

		// // validateDay();

		// function validateMonth() {
		// 	var cnpMonth = parseInt(cnp.slice(3, 5));
		// 	var monthValue = parseInt(month);
		// 	if (monthValue < 1 || monthValue > 12) {
		// 		message.innerHTML = "Month entered is not valid";
		// 		return false;
		// 	} 
		// 	if (cnpMonth !== monthValue) {
		// 		message.innerHTML = "Month entered is not a match with the CNP";
		// 		return false;
		// 	}
		// 	return true;
		// }

		// // validateMonth();

		// function validateYear() {
		// 	var cnpYear = parseInt(cnp.slice(1, 3));
		// 	var yearValue = parseInt(year.slice(2));
		// 	if (yearValue < 1 || yearValue > 2016) {
		// 		message.innerHTML = "Year entered is not valid";
		// 		return false;
		// 	} 
		// 	if (cnpYear !== yearValue) {
		// 		message.innerHTML = "Year entered is not a match with the CNP";
		// 		return false;
		// 	}
		// 	return true;
		// }

		// // validateYear();


	});
});


