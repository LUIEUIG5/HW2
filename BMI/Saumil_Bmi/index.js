

function calculateBMI(){
    var bmi;
    var result = document.getElementById("result");
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);

    document.getElementById("weight-val").textContent = weight + " kg";
    document.getElementById("height-val").textContent = height + " cm";

    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
        bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
        result.textContent = bmi;
    }
    if(bmi < 18.5){
        category = "you are 'Underweight'";
        result.style.color = "#ffc44d";
    }

    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "you have 'Normal Weight'";
        result.style.color = "#0be881";
    }

    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "you are 'Overweight'";
        result.style.color = "#ff884d";
    }

    else{
        category = "you are 'Obese'";
        result.style.color = "#ff5e57";
    }

    document.getElementById("category").textContent = category;
}