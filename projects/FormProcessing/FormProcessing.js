document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: parseInt(document.getElementById("age").value, 10),
        feedback: document.getElementById("feedback").value
    };

    if (!formData.name || !formData.email || !formData.feedback) {
        alert("Please make sure all fields are filled out.");
        return;
    }

    if (isNaN(formData.age) || formData.age < 18 || formData.age > 99) {
        alert("Age must be a number between 18 and 99 to submit this form.");
        return;
    }

    console.log("Form Data: ", formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "mockResponse.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("responseMessage").innerText = response.message;

            alert("Form successfully submitted!");
            document.getElementById("myForm").reset();
        }else if (xhr.readyState === 4){
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));
});
