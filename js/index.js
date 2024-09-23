(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-sidebar-open]"),
    closeMenuBtn: document.querySelector("[data-sidebar-close]"),
    menu: document.querySelector("[data-sidebar]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();
