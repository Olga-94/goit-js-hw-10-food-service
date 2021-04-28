const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const changeBody = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body')
function changeTheme(e) {
   const checkTheme = e.target.checked;
    if (checkTheme) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        return
    }
    else
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
}

changeBody.addEventListener('click', changeTheme)

document.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),);
changeBody.checked = localStorage.getItem('theme') === Theme.DARK;