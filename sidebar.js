document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebar-toggle-btn');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
        if (sidebar.classList.contains('hidden')) {
            toggleButton.textContent = '<';
        } else {
            toggleButton.textContent = '>';
        }
    });
});
