document.addEventListener("DOMContentLoaded", function(event) {

	var element = document.getElementById("btn");
	element.addEventListener('click', function() {

		var cnp = document.getElementById('cnp').value;
		var message = document.getElementById('message');
		var day = document.getElementById('day');
		var month = document.getElementById('month');
		var year = document.getElementById('year');


		var digit = '0123456789';
		var valid = true;
		
		if(cnp.length === 13) {
			for (var i = 0; i < cnp.length; i++) {
				// console.log('litera = ', cnp[i])
				if (digit.indexOf(cnp[i]) === -1) {
					// valid = false;
					// break;
					message.innerHTML = "Your CNP is not a number!";
				}
				// else {
				// 	valid = true;
				// }
			}
			
		} // aici end if
		else {
			message.innerHTML = "Your CNP is not a good!";
		}
		// message.innerHTML = "Your CNP " + cnp + " is valid!";
		
		function validation() {
			if (cnp.length == 0) {
				message.innerHTML = "The cnp is empty!";
				return false;
			}
			else {
				return true;
			}
		}
		console.log(validation());

		function validData() {
			if (day.value == 0 || month.value == 0 || year.value == 0) {
				message.innerHTML = "The data is not valid!";
				return false;
			}
			else {
				return true;
			}	
		}
		console.log(validData());

		function belowTen() {
			var theDay = "";
			var thaMonth = "";
			if (day.value < 10, month.value < 10) {
				theDay = "0" + day.value;
				theMonth = "0" + month.value;
			}
			else {
				theDay = day.value;
				theMonth = month.value;
			}
			// return theDay + theMonth;
			
			for (var i = 0; i < cnp.length; i++) {

				dayCnp = cnp[1] + cnp[2];
				monthCnp = cnp[3] + cnp[4];
				yearCnp = cnp[5] + cnp[6];
				if (dayCnp !== theDay) {
					message.innerHTML = dayCnp + " is no match!";
				}
				else if (monthCnp !== theMonth) {
					message.innerHTML = monthCnp + " is no match!";
				}

				else {
					message.innerHTML = "the day and month is match";
				}
					
			}
		}
		console.log(belowTen());

	});
});


