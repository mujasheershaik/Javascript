
function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name==""){
        alert("name is required");
        return false;
    }
    if (email=""){
        alert("email is required");
        return false;
    }
    alert ("Form submitted successfully");
    return true;
}