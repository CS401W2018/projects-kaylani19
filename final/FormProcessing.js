document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        ethnicity: document.getElementById("ethnicity").value,
        visited: document.querySelector('input[name="visited"]:checked')?.value || "",
        favorite: document.getElementById("favorite").value
    };

    if (!formData.ethnicity || !formData.visited || !formData.favorite) {
        alert("Please make sure all fields are filled out.");
        return;
    }

    console.log("Form Data: ", formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                alert(response.message);
                document.getElementById("myForm").reset();
            } else {
                alert("Error submitting form.");
            }
        }
    };
    xhr.send();
});
