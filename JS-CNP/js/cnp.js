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

		//CHECK IF THE DATA ENTERED ARE VALID
		if(checkCnp() && validate(day, "day") && validate(month, "month") && validate(year.slice(2), "year")) {
			message.innerHTML = "CNP is valid!";
		}




		//CHECK THE DATA OF CNP 
		function checkCnp() {
			var digit = '0123456789';

			if(cnp.length === 13) {
				
				for (var i = 0; i < cnp.length; i++) {
					
					if (digit.indexOf(cnp[i]) === -1) {
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


		//CHECK IF THE DAY, MONTH AND YEAR MATCH WITH CNP 
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
			// console.log('CNP VAL =', cnpVal);
		
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
	});
});


