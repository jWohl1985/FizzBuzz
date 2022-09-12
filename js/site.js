function runTheApp(){
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    if(isValidInput(fizzNumber, buzzNumber)){
        displayResults(fizzNumber, buzzNumber);
    }
    else{
        displayError("You must enter two positive integers that are different from each other.");
    }
}

function isValidInput(number1, number2){
    if(!Number.isInteger(number1) || !Number.isInteger(number2)){
        return false;
    }

    if(number1 <= 0 || number2 <= 0){
        return false;
    }

    if(number1 == number2){
        return false;
    }

    return true;
}

function displayResults(fizzNumber, buzzNumber){
    let tableBody = document.getElementById("result");
    let html = "";

    for(let i = 1; i <= 100; i++){
        if (i % fizzNumber == 0 && i % buzzNumber == 0){
            html += "<tr><td>FizzBuzz!</td></tr>";
        }
        else if (i % fizzNumber == 0){
            html += "<tr><td>Fizz</td></tr>";
        }
        else if (i % buzzNumber == 0){
            html += "<tr><td>Buzz</td></tr>";
        }
        else{
            html += `<tr><td>${i}</td></tr>`;
        }
    }

    tableBody.innerHTML = html;
}





