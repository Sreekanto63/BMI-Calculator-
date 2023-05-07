const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
	const weight = Number(weightInput.value);
	const height = Number(heightInput.value); 
	const bmi = weight / (height * height);
	resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});
