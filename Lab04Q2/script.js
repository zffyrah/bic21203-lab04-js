//Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

//Define the function
function checkInput() {

    //Read the input
    const inputValue = userInput.value.trim();

    //check empty input
    if (inputValue == ""){
        result.textContent = "Please enter a valid number!";
    }

    //check invalid number
    else if (!Number.isFinite(Number(inputValue))){
        result.textContent = "Please enter a valid number!";
    }

    //check number lower than 10
    else if (Number(inputValue) < 10) {
        result.textContent = "The number is lower than 10";
    }

    //check number higher than 10
    else if (Number(inputValue > 10)){
        result.textContent = "Number is higher than  10";
    }

    //check number equal to 10
    else{
        result.textContent = "The number is equal to 10";
    }
}

//Add click event listener
checkBtn.addEventListener("click", checkInput);
