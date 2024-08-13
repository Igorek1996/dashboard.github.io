document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".nav__item, .user, .title, .content__header, .content__table, .pagination");
  
    function showElements() {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 100); // добавление задержки между анимациями элементов
        });
    }
  
    // Запускаем анимацию при загрузке страницы
    showElements();
});
  