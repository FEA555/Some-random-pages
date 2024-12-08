let ReviewButton = document.getElementById('ReviewBtn');
let ReviewButtonFin = document.getElementById('ReviewSubmitButton');
let FinButtonFin = document.getElementById('FinButtonFin');
let Close = document.getElementById('CloseButton');
let ReviewPopup = document.getElementById('ReviewPopupBG');
let FinPopup = document.getElementById('FinPopupBG');
let Popup = document.getElementById('ReviewPopup');
let NameField = document.getElementById('Name');
let CommentField = document.getElementById('Comment');
let RatingField = document.getElementById('Rating');
const MainHeaders = document.getElementsByClassName("MainHeading");
const StudentImg = document.getElementById('DuckImg');
const FirstPar = document.getElementById('firstPar');
const ReviewFin = document.getElementById('reviewFin');

ReviewButton.onclick = function() {
    ReviewPopup.classList.remove("PopupHidden");
}
ReviewButtonFin.onclick = function(event) {
    event.preventDefault();
    if (NameField.value == "" || CommentField.value == ""){
        ReviewButtonFin.textContent = "Пожалуйста, заполните поля!";
    } else
    {
        if (RatingField.value == "1" || RatingField.value == "2" || RatingField.value == "3"){
            ReviewButtonFin.textContent = "Извинись.";
            CommentField.value = "";
        } else {
            validateForm();
        }
    }
    //console.log(NameField.value);
}
Close.onclick = function() {
    ReviewPopup.classList.add("PopupHidden");
}
FinButtonFin.onclick = function() {
    FinPopup.classList.add("PopupHidden");
}
function validateForm() {
    ReviewPopup.classList.add("PopupHidden");
    FinPopup.classList.remove("PopupHidden");
    setTimeout(() => {
        ReviewFin.style.color = "white";
    }, 50);
}
window.onclick = function(event) {
    if (event.target === ReviewPopup) {
        ReviewPopup.classList.add("PopupHidden");
    }
}

MainHeaders[0].addEventListener('click', () => {
    alert("Вы кликнули на заголовок - так держать!");
});

FirstPar.addEventListener('click', () => {
    if (FirstPar.style.backgroundColor === "red") {
        FirstPar.style.backgroundColor = "white";
    } else {
        FirstPar.style.backgroundColor = "red";
    }
    
});

StudentImg.addEventListener('mouseenter', () => {
    StudentImg.style.transform = 'scale(1.2)'; 
});
StudentImg.addEventListener('mouseleave', () => {
    StudentImg.style.transform = 'scale(1)'; 
});
StudentImg.addEventListener('click', () => {
    StudentImg.src = "Darth_Vader.jpg"; 
});
StudentImg.addEventListener('dblclick', () => {
    alert("Не налегай, у меня не так много любимых преподавателей");
});