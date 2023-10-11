const bmiCalc = ()=>{
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const output =  document.getElementById('output');
    let result ;


    let range =  (weight/((height*height)/10000)).toFixed(2);
    
    if(range<16){
        result = 'severe thinness'
    }
    else if(range>16 && range<17){
        result = 'moderate thinness'
    }
    else if(range>17 && range<18.5){
         result = 'Mild thinness'
    }
    else if(range>18.5 && range<25){
      
         result = 'normal'
    }
    else if(range>25 && range<30){
       
        result = 'overweight'
        p.style.backgroundColor = 'green'
    }
    else if(range>30 && range<34){
        result = 'obese class I'
    }
    else if(range>35 && range<40){
        result = 'obese class II'

    }
    else if(range>40){
        result = 'obese class III'
    }

    output.innerHTML = `BMI Range : ${range} <br />
    condition: ${result}` 
}

const reset = ()=>{
    window.location.reload()

}