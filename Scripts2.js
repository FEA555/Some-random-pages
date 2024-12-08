let OrderButton1 = document.querySelector('.OrderButton1');
let OrderButton2 = document.querySelector('.OrderButton2');
let OrderButton3 = document.querySelector('.OrderButton3');
let OrderButtonFin = document.querySelector('.OrderButtonFin');
let FinButtonFin = document.querySelector('.FinButtonFin');
let Close = document.getElementById('CloseButton');
let HiddenField1 = document.getElementById('HiddenField1');
let OrderPopup = document.getElementById('OrderPopupBG');
let FinPopup = document.getElementById('FinPopupBG');
let Popup = document.getElementById('OrderPopup');
let NameField = document.getElementById('Name');
let EmailField = document.getElementById('Email');
let CheckField = document.getElementById('Check');
//let SubmitButton = document.getElementById('OrderSubmitButton'); 
//console.log(document.querySelector('.OrderButton'));
OrderButton1.onclick = function() {
    OrderPopup.classList.remove("PopupHidden");
    HiddenField1.value = 1;
}
OrderButton2.onclick = function() {
    OrderPopup.classList.remove("PopupHidden");
    HiddenField1.value = 2;
}
OrderButton3.onclick = function() {
    OrderPopup.classList.remove("PopupHidden");
    HiddenField1.value = 3;
}
OrderButtonFin.onclick = function() {
    if (NameField.value == "" || EmailField.value == "" || !CheckField.checked){
        OrderButtonFin.textContent = "Пожалуйста, заполните поля!";
    }
    //console.log(NameField.value);
}
Close.onclick = function() {
    OrderPopup.classList.add("PopupHidden");
}
FinPopup.onclick = function() {
    FinPopup.classList.add("PopupFinHidden");
}
function validateForm() {
    
    OrderPopup.classList.add("PopupHidden");
    FinPopup.classList.remove("PopupFinHidden");
}
window.onclick = function(event) {
    if (event.target === OrderPopup) {
        OrderPopup.classList.add("PopupHidden");
    }
}