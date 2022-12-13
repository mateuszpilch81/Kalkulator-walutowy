let inputElement = document.querySelector(".js-form__money");
let currencyElement = document.querySelector(".js-form__currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-form__result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = inputElement.value;
    let currency = currencyElement.value;
    let currencySign;

    let eurRate = 4.71;
    let usdRate = 4.49;
    let gbpRate = 5.48;

    switch (currency) {
        case "EUR":
            currencySign = eurRate;
            break;
        case "USD":
            currencySign = usdRate;
            break;
        case "GBP":
            currencySign = gbpRate;
    }

    let result = input / currencySign
    resultElement.innerText = result.toFixed(2)
    resultElement.innerText = `${inputElement.value} PLN = ${result.toFixed(2)} ${currency}`;
});