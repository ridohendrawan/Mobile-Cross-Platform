const calculateBtn = document.getElementById('calc-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const resetBtn = document.getElementById('reset-btn');

// ============================== Kalkulator BMI
const calculateBMI = () =>{
    const enteredHeight = +heightInput.value / 100; //Tinggi dalam meter
    const enteredWeight = +weightInput.value; //Berat dalam Kg
    // Print Kriteria Hasil Kalkulator BMI
    var kriteriabmi;
    var bmi = enteredWeight/(enteredHeight*enteredHeight);
    if(bmi < 18.5){
        kriteriabmi = "Kurus";
    }else if(bmi >= 18.5){
        kriteriabmi = "Normal";
    }else if(bmi > 24.9){
        kriteriabmi = "Gemuk";
    }else if( bmi >= 30){
        kriteriabmi = "Obesitas";;
    }
    document.getElementById("result-bmi").innerHTML = 
    '<center> <ion-card style="width: 30%;"><ion-card-header >'+bmi+'</ion-card-header><ion-card-content style="font-size:large">'+kriteriabmi+'</ion-card-content></ion-card></center>';
}
calculateBtn.addEventListener('click',calculateBMI);

// ============================== Reset Input Kalkulator BMI
const resetBMI = () =>{
    document.getElementById("result-bmi").innerHTML=' ';
}
resetBtn.addEventListener('click',resetBMI);
