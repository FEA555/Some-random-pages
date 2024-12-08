const sem2Button = document.getElementById("2semButton");
const table = document.getElementById('pracTable');
const label = document.getElementById('Practics')
const lecButton = document.getElementById("lecButton");
const lecTable = document.getElementById("lecTable");

sem2Button.addEventListener('click', () => {
    label.textContent = "Практики 2 семестра";
    const ColumnIndex = 1;
    table.rows[1].cells[ColumnIndex].innerText = "Базовое бэкенд-приложение";
    table.rows[2].cells[ColumnIndex].innerText = "HTTP-запросы";
    table.rows[3].cells[ColumnIndex].innerText = "JSON и работа с ним";
    table.rows[4].cells[ColumnIndex].innerText = "HTTP-ответы";
    table.rows[5].cells[ColumnIndex].innerText = "Проектирование API";
    table.rows[6].cells[ColumnIndex].innerText = "Роутинг и его настройка";
    table.rows[7].cells[ColumnIndex].innerText = "NoSQL базы данных";
    table.rows[8].cells[ColumnIndex].innerText = "Обеспечение авторизации и доступа пользователей";
    table.rows[9].cells[ColumnIndex].innerText = "Работа сторонних сервисов уведомления и авторизации";
    table.rows[10].cells[ColumnIndex].innerText = "Основы ReactJS";
    table.rows[11].cells[ColumnIndex].innerText = "Работа с компонентами динамической DOM";
    table.rows[12].cells[ColumnIndex].innerText = "Использование хуков в React";
    table.rows[14].cells[ColumnIndex].innerText = "Основы микросервисной архитектуры";
    table.rows[15].cells[ColumnIndex].innerText = "Разработка классических модулей веб-приложений";
    table.rows[16].cells[ColumnIndex].innerText = "Разработка классических модулей веб-приложений";
});
lecButton.addEventListener('click', () => {
    if (lecTable.style.display === "none") {
        lecTable.style.display = "block";
        setTimeout(() => {
            lecTable.style.opacity = "1";
        }, 50);
    } else {
        lecTable.style.opacity = "0";
        lecTable.style.display = "none";
    }
});