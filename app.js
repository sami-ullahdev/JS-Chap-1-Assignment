alert("Ans-1 Asalam O Alikum");

function showAlert2() {
    alert("I am learning mern stack Development");
}

function showAlert3() {
    alert("Well Come To JS Land...\nHappy Coding!");
}

function showAlert4() {
    alert("Well Come To JS Land");
    alert("Happy Coding! \nPrevent this page from creating additional dialogs.");
}

function showAlert5() {
    alert("Hello....I can run JS throught my web browzer's console");
    console.log(alert);
}

function showAlert6() {
    alert("I used this task in My new Project\nand also I am working on it..");
    console.log(alert);
}

document.getElementById("Options").addEventListener("click", function () {
    document.getElementById("showContent").innerHTML = "a. Head </br> b. Body (before your page’s HTML) </br> c. Body (inside your page’s HTML) </br> d.Body (after your page’s HTML)";
});

function rightAnswer() {
    alert("Body (inside your page’s HTML)");
}