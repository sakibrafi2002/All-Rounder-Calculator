// file - script.js

// Clearing the display section
function clearResult() {
    document.getElementById("result").
    value = "";
}

// The user input
function appendCharacter(char) {
    document.getElementById("result").
    value += char;
}

// Performing the calculations
function calculateResult() {
    let result = 
        document.getElementById("result").value;
    try {
        result = eval(result);
        document.getElementById("result").
        value = result;
    } catch (error) {
        document.getElementById("result").
        value = "Error";
    }
}



// BMI Calculator

document.getElementById('calculate').addEventListener('click', function() {
	var height = parseFloat(document.getElementById('height').value);
	var weight = parseFloat(document.getElementById('weight').value);
	var heightUnit = document.getElementById('heightUnit').value;
	var weightUnit = document.getElementById('weightUnit').value;
	if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
		if (heightUnit === 'ft') {
			height *= 30.48;
		}
		if (weightUnit === 'lb') {
			weight *= 0.453592;
		}
		var bmi = calculateBMI(height, weight);
		var category = getBMICategory(bmi);
		document.getElementById('result').innerHTML = 
			`Your BMI is <span class="font-semibold">${bmi.toFixed(2)}</span>. You are ${category}.`;
	} else {
		document.getElementById('result').innerHTML = 
			'<span class="text-red-500">Please enter valid height and weight.</span>';
	}
});
function calculateBMI(height, weight) {
	return weight / Math.pow(height / 100, 2);
}
function getBMICategory(bmi) {
	if (bmi < 18.5) {
		return 'Underweight';
	} else if (bmi >= 18.5 && bmi < 24.9) {
		return 'Normal weight';
	} else if (bmi >= 24.9 && bmi < 29.9) {
		return 'Overweight';
	} else {
		return 'Obese';
	}
}



// Age Calculator

function getDOB() {
    let inputDob = 
        document.getElementById("inputDob").value;
    let currentDate = 
        document.getElementById("cdate").value;
    if (!inputDob || !currentDate) {
        alert("Please fill in both Date of Birth and Current Date.");
        return;
    }
    let dob = new Date(inputDob);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();
    let now = new Date(currentDate);
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;
    if (yearDiff < 0) {
        document.getElementById("currentAge").innerHTML = 
            "Invalid Date";
    } else {
        if (monthDiff <= 0 && dateDiff < 0) {
            yearDiff--;
            monthDiff = 12 + monthDiff;
        }
        if (dateDiff < 0) {
            dateDiff = 30 + dateDiff;
            monthDiff--;
        }
        document.getElementById("currentAge")
            .innerHTML = 
            `Your current Age is ${yearDiff} 
                years ${monthDiff} months ${dateDiff} days`;
    }
}
function clearDates() {
    document.getElementById("inputDob").value = "";
    document.getElementById("cdate").value = "";
    document.getElementById("currentAge").innerHTML = "";
}