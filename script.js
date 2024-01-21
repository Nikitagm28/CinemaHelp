document.addEventListener('DOMContentLoaded', function() {
    var taskCards = document.querySelectorAll('.task-card');
    var taskDetailContainer = document.getElementById('taskDetailContainer'); // Убедитесь, что у вас есть этот элемент в HTML.
    var addTaskButton = document.querySelector('.add-task-button');
    var addTaskContainer = document.getElementById('addTaskContainer'); // Убедитесь, что у вас есть этот элемент в HTML.
    var addTaskForm = document.getElementById('addTaskForm'); // Убедитесь, что у вас есть форма с этим идентификатором в HTML.
    var backButtons = document.querySelectorAll('.back-button'); // Это должны быть все кнопки "Назад" в вашем приложении.


    // Обработчик кликов по карточкам задач для отображения деталей
    taskCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // TODO: Заполнить информацию о задаче в детальном окне, если она динамическая
            taskDetailContainer.style.display = 'block';
        });
    });

    // Обработчики для кнопок "Назад"
    backButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Скрываем все модальные окна
            taskDetailContainer.style.display = 'none';
            addTaskContainer.style.display = 'none';
        });
    });

    // Обработка переключения состояния кнопки "Участвую" / "Отменить участие"
    var participateButtons = document.querySelectorAll('.participate-button');
    participateButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Предотвращаем всплытие события
            var buttonText = button.textContent.trim(); // Убедитесь, что нет лишних пробелов
            if (buttonText === 'Участвую') {
                button.textContent = 'Отменить участие';
                button.classList.remove('participate-button');
                button.classList.add('cancel-participation-button');
            } else {
                button.textContent = 'Участвую';
                button.classList.remove('cancel-participation-button');
                button.classList.add('participate-button');
            }
            // TODO: Отправить изменение состояния участия на сервер
        });
    });
    

    // Показать форму добавления задачи
    addTaskButton.addEventListener('click', function() {
        addTaskContainer.style.display = 'flex'; // Убедитесь, что у вас есть flex в стилях для этого контейнера
    });

    // Обработка отправки формы добавления задачи
    addTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = {
            name: document.getElementById('taskName').value,
            description: document.getElementById('taskDescription').value,
            participants: document.getElementById('taskParticipants').value,
            date: document.getElementById('taskDate').value,
            location: document.getElementById('taskLocation').value
        };
        console.log(formData); // Замените это отправкой данных на сервер
        addTaskContainer.style.display = 'none';
        // TODO: После успешного добавления задачи закрыть форму и обновить список задач на странице
    });
});
