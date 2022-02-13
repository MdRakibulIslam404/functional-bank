function inputNumber() {
    const inputValue = document.getElementById("input-number");
    const inputNumber = parseFloat(inputValue.value);
    // clear the input field
    inputValue.value = "";
    return inputNumber;
};

function setResult(resultId, number, convert) {
    const resultElement = document.getElementById(resultId);
    parseFloat(resultElement.innerText);
    // double
    if (convert == "double") {
        const double = number * 2;
        resultElement.innerText = double;
    }
    // triple
    else if (convert == "triple") {
        const double = number * 3;
        resultElement.innerText = double;
    }
};

// double button handler
document.getElementById("double-button").addEventListener("click", function () {
    const number = inputNumber();
    if (number > 0) {
        setResult("result-double", number, "double");
    }
    else {
        alert("Please enter a number")
    }
});

// triple button handler
document.getElementById("triple-button").addEventListener("click", function () {
    const number = inputNumber();
    if (number > 0) {
        setResult("result-triple", number, "triple");
    }
    else {
        alert("Please enter a number")
    }
});