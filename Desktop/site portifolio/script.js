const themeToggle = document.getElementById('tema');
const body = document.body;

const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});


themeToggle.addEventListener('click', () => {

    const isDarkMode = body.classList.contains('dark-mode');
    

    const newTheme = isDarkMode ? 'light' : 'dark';
    

    localStorage.setItem('theme', newTheme);
    

    applyTheme(newTheme);
});