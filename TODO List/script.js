document.addEventListener("DOMContentLoaded", function () {
    var newToDoTextField = document.getElementById("new-todo-text-field");
    var list = document.getElementById("list");

    document.getElementById("add-button").addEventListener("click", function () {
        var text = newToDoTextField.value;
        var errorMessage = document.getElementById("error-message");

        if (text === "") {
            errorMessage.style.visibility = "visible";
            return;
        }

        errorMessage.style.visibility = "hidden";

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button class='edit-button' id='edit-button' type='button'>Edit</button>" +
                "<button class='delete-button' id='delete-button' type='button'>Delete</button>";

            listItem.querySelector(".text").textContent = text;

            listItem.querySelector(".delete-button").addEventListener("click", function () {
                listItem.parentElement.removeChild(listItem);
            });

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit-text'><button class='save-button' id='save-button' type='button'>Save</button>" +
                    "<button class='cancel-button' id='cancel-button' type='button'>Cancel</button>";
                listItem.querySelector(".edit-text").value = text;

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    if (listItem.querySelector(".edit-text").value === "") {
                        listItem.querySelector(".edit-text").placeholder = "Please enter text";
                    } else {
                        text = listItem.querySelector(".edit-text").value;
                        setViewMode();
                    }
                });

                listItem.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });
            });
        }

        var listItem = document.createElement("li");
        setViewMode();

        list.appendChild(listItem);

        newToDoTextField.value = "";
    });
});