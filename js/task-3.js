const inputEl = document.querySelector('#name-input');
const outpetEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    const trimmedValue = inputEl.value.trim();
    outputEl.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
});