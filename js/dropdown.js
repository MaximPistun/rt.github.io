(function () {
    const dropdown = document.querySelector('.dropdown', '.catalog-tap');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('dropdown_active');
    });
}());

