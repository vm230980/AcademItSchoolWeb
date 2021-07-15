document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("convertButton").addEventListener("click", function () {
        var celsiusInputTextField = document.getElementById("celsiusInputTextField");
        var fahrenheitOutputTextField = document.getElementById("fahrenheitOutputTextField");
        var kelvinOutputTextField = document.getElementById("kelvinOutputTextField");
        var celsiusValue = parseFloat(celsiusInputTextField.value);

        if (Number.isNaN(celsiusValue)) {
            fahrenheitOutputTextField.value = "";
            kelvinOutputTextField.value = "";
        } else {
            fahrenheitOutputTextField.value = celsiusValue * 9 / 5 + 32;
            kelvinOutputTextField.value = celsiusValue + 273;
        }
    });
});