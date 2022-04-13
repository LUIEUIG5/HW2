
function openMatrics(evt, matricsName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      document.getElementById("result").textContent = '0.0'
      document.getElementById("category").textContent = 'Please enter height and weight.'

    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      document.getElementById("result").textContent = '0.0'
      document.getElementById("category").textContent = 'Please enter height and weight.'
      
    }
    document.getElementById(matricsName).style.display = "block";
    evt.currentTarget.className += " active";
}



function calculateStdBMI(){
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


function calculateUsBMI(){
  var bmi_us;
  var result = document.getElementById("result");
  var weight = parseInt(document.getElementById("weight_lb").value);
  var height = parseInt(document.getElementById("height_in").value);


  document.getElementById("weight_lb-val").textContent = weight + " lb";
  document.getElementById("height_in-val").textContent = height + " inch";

  if (height === "" || isNaN(height)) 
      result.innerHTML = "Provide a valid Height!";

  else if (weight === "" || isNaN(weight)) 
      result.innerHTML = "Provide a valid Weight!";

  // If both input is valid, calculate the bmi
  else {
      bmi_us = ((weight /Math.pow( (height), 2 ))*703).toFixed(1);
      result.textContent = bmi_us;
      console.log(bmi_us)

  }
  if(bmi_us < 18.5){
      category = "you are 'Underweight'";
      result.style.color = "#ffc44d";
  }

  else if( bmi_us >= 18.5 && bmi_us <= 24.9 ){
      category = "you have 'Normal Weight'";
      result.style.color = "#0be881";
  }

  else if( bmi_us >= 25 && bmi_us <= 29.9 ){
      category = "you are 'Overweight'";
      result.style.color = "#ff884d";
  }

  else{
      category = "you are 'Obese'";
      result.style.color = "#ff5e57";
  }

  document.getElementById("category").textContent = category;
}