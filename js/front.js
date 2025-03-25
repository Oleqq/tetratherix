document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.querySelector('.application-blogs--card__paragraph');

    // Проверяем высоту и добавляем/удаляем класс для прокрутки
    function checkScroll() {
        if (paragraph.scrollHeight > 400) {
            paragraph.classList.add('has-scroll');
        } else {
            paragraph.classList.remove('has-scroll');
        }
    }

    // Проверка высоты на старте и при изменении контента
    checkScroll();

    // Если контент динамично обновляется, можно вызывать checkScroll() по событию (например, при загрузке контента).
});
