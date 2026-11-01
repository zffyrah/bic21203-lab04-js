//select html elements
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

//define the function
function generateNumbers() {

    //clear existing lists items
    numberList.textContent = "";

    //generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++){

        //create a new list item
        const listItem = document.createElement("li");

        //set the text
        listItem.textContent = "The number is " + i;

        //add the list item to the ordered list
        numberList.appendChild(listItem);
    }
}

//add click event listener
generateBtn.addEventListener("click", generateNumbers);
