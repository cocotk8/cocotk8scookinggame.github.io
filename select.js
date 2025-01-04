document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelectorAll('.select');

    select.forEach(select => {
        const selected = select.querySelector('.select-selected');
        const options = select.querySelector('.select-options');

        selected.addEventListener('click', () => {
            options.style.display = options.style.display === 'block' ? 'none' : 'block';
        });

        options.addEventListener('click', (event) => {
            if (event.target.classList.contains('select-option')) {
                const selectedOption = event.target.getAttribute('data-value');
                selected.textContent = event.target.textContent;
                selected.setAttribute('data-value', selectedOption);
                options.style.display = 'none';
            }
        });
    });

    document.addEventListener('click', (event) => {
        select.forEach(select => {
            const options = select.querySelector('.select-options');
            if (!select.contains(event.target)) {
                options.style.display = 'none';
            }
        });
    });
});