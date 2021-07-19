document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("convertButton").addEventListener("click", function () {
        var celsiusInputTextField = document.getElementById("celsiusInputTextField");
        var fahrenheitOutputTextField = document.getElementById("fahrenheitOutputTextField");
        var kelvinOutputTextField = document.getElementById("kelvinOutputTextField");

        if (celsiusInputTextField.value === "") {
            document.getElementById("error-message").textContent = "<< Введите значение";
            fahrenheitOutputTextField.value = "";
            kelvinOutputTextField.value = "";
            return;
        }

        document.getElementById("error-message").textContent = "";

        var celsiusValue = parseFloat(celsiusInputTextField.value);

        if (isNaN(celsiusValue)) {
            fahrenheitOutputTextField.value = "";
            kelvinOutputTextField.value = "";
        } else {
            fahrenheitOutputTextField.value = (celsiusValue * 9 / 5 + 32).toFixed(2);
            kelvinOutputTextField.value = (celsiusValue + 273.15).toFixed(2);
        }
    });
});