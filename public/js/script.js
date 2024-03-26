window.addEventListener('load', function () {
    console.log('All assets are loaded')





    Array.prototype.forEach.call(
        document.querySelectorAll(".file-upload__button"),
        function (button) {
            const hiddenInput = button.parentElement.querySelector(
                ".file-upload__input"
            );
            const label = button.parentElement.querySelector(".file-upload__label");
            const defaultLabelText = "No file(s) selected";


            label.textContent = defaultLabelText;
            label.title = defaultLabelText;

            button.addEventListener("click", function () {
                hiddenInput.click();
            });

            hiddenInput.addEventListener("change", function () {
                const filenameList = Array.prototype.map.call(hiddenInput.files, function (
                    file
                ) {
                    return file.name;
                });

                label.textContent = filenameList.join(", ") || defaultLabelText;
                label.title = label.textContent;
            });
        }











    );





    var inputField = document.getElementById("input-restricted");
    var button = document.getElementById("go-to-restrcted");


    inputField.addEventListener("input", function () {
        var userInput = inputField.value;


        if (userInput === "ABCDEF") {

            button.disabled = false;
        } else {

            button.disabled = true;
        }
    });



});









