let name = document.querySelector(".name");
let number = document.querySelector(".mobile-number");
let email = document.querySelector(".email");
let sumit = document.querySelector(".sumit");
let v_name = /^[a-zA-Z1-9]+$/;
let v_number = /^\d{10}$/;
let v_email = /^[a-zA-Z0-9]+@gmail\.com/;

let form_validation = true;
sumit.addEventListener("submit", () => {
    event.preventDefault();
    console.log("hii");
    console.log(number.value);
    if (v_name.test(name.value) == false) {
        console.log("hii");
        document.querySelector(".e-name").style.color = "red";
        form_validation = false;
    } else {
        document.querySelector(".e-name").style.color = "white";
        form_validation = true;
    }

    if (v_number.test(number.value) == false) {
        document.querySelector(".e-number").style.color = "red";
        form_validation = false;
    } else {
        document.querySelector(".e-number").style.color = "white";
        form_validation = true;
    }

    if (v_email.test(email.value) == false) {
        document.querySelector(".e-email").style.color ="red";
        form_validation = false;
    } else {
        document.querySelector(".e-email").style.color ="white";
        form_validation = true;
    }
    if (form_validation) {
        alert("form validate successfully");
        number.value = "";
        email.value = "";
        name.value = "";
        form_validation = true;
    }
});

// let name = document.querySelector(".name");
// let number = document.querySelector(".mobile-number");
// let email = document.querySelector(".email");
// let submitButton = document.querySelector(".sumit");
// let v_name = /^[a-zA-Z1-9]+$/;
// let v_number = /^\d{10}$/;
// let v_email = /^[a-zA-Z0-9]+@gmail\.com$/;

// let form_validation = true;

// submitButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     form_validation = true;  // Reset form validation status

//     if (!v_name.test(name.value)) {
//         document.querySelector(".e-name").style.color = "red";
//         form_validation = false;
//     } else {
//         document.querySelector(".e-name").style.color = "white";
//     }

//     if (!v_number.test(number.value)) {
//         document.querySelector(".e-number").style.color = "red";
//         form_validation = false;
//     } else {
//         document.querySelector(".e-number").style.color = "white";
//     }

//     if (!v_email.test(email.value)) {
//         document.querySelector(".e-email").style.color ="red";
//         form_validation = false;
//     } else {
//         document.querySelector(".e-email").style.color ="white";
//     }

//     if (form_validation) {
//         alert("Form validated successfully");
//         number.value = "";
//         email.value = "";
//         name.value = "";
//     }
// });

