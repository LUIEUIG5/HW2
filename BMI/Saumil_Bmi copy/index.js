const unitOfMaxtrix = document.getElementById("unit-of-maxtrix");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");


unitOfMaxtrix.addEventListener("change", () => {
  const area = document.getElementById("height-div");
  if (unitOfMaxtrix.value === "US") {
    weightInput.setAttribute("placeholder", "(lbs)");
    heightInput.setAttribute("placeholder", "(ft)");
    const input = document.createElement("input");
    input.setAttribute("id", "inch");
    input.setAttribute("placeholder", "(inch)");
    input.setAttribute("type", "number");
    area.appendChild(input);
  } else {
    weightInput.setAttribute("placeholder", "(kg)");
    heightInput.setAttribute("placeholder", "(cm)");
    if (document.getElementById("inch")) {
      area.removeChild(document.getElementById("inch"));
    }
  }
  weightInput.value = "";
  heightInput.value = "";

  if (document.getElementById("result-section"))
    document.body.removeChild(document.getElementById("result-section"));
});


var bmiResult = () => {
  let bmi = 0;

  if (unitOfMaxtrix.value === "metric") {
    // convert cm to m
    const height = parseInt(heightInput.value) / 100;
    bmi = parseFloat(weightInput.value) / Math.pow(height, 2);
  } else {
    const inch = document.getElementById("inch");

    if (inch.value === "") inch.value = "0";

    // convert lbs to kg
    const weight = parseFloat(weightInput.value) / 2.205;

    // convert feet and inch to m
    const height =
      parseFloat(heightInput.value) / 3.281 + parseInt(inch.value) / 39.37;

    bmi = weight / Math.pow(height, 2);
  }

  return Math.round(bmi * 100) / 100;
};


var result = () => {

  var resultSection = document.getElementById("resultSection");
  var category = document.getElementById("category");



  if(bmiResult() < 18.5){
    category.innerHTML = "you are 'Underweight'";
    resultSection.style.color = "#ffc44d";
  }else if( bmiResult() >= 18.5 && bmiResult() <= 24.9 ){
    category.innerHTML = "you have 'Normal Weight'";
    resultSection.style.color = "#0be881";
  }else if( bmiResult() >= 25 && bmiResult() <= 29.9 ){
    category.innerHTML = "you are 'Overweight'";
    resultSection.style.color = "#ff884d";
  }else if ( bmiResult() >= 29.9){
    category.innerHTML = "you are 'Obese'";
    resultSection.style.color = "#ff5e57";
  } else {
    category.innerHTML = "Please provide a valid Height and Weight.";
    resultSection.style.color = "#ff5e57";
  }

  resultSection.innerHTML = ` <strong>${bmiResult()}</strong>`;
}


