(() => {
  const refs = {
    openSidebarBtn: document.querySelector("[data-sidebar-open]"),
    closeSidebarBtn: document.querySelector("[data-sidebar-close]"),
    sidebar: document.querySelector("[data-sidebar]"),
    customers: document.querySelector("[data-customers]"),
  };

  // Плавная анимация компонентов при загрузке
  function showComponents() {
    refs.customers.classList.add("visible");

    // Убираем класс hidden после анимации
    setTimeout(() => {
      refs.customers.classList.remove("hidden");
    }, 500);
  }

  window.addEventListener("load", showComponents);

  // Управление открытием/закрытием Sidebar по клику
  refs.openSidebarBtn.addEventListener("click", toggleModal);
  refs.closeSidebarBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.sidebar.classList.toggle("is-open");
  }
})();
