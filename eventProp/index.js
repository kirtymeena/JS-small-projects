const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const modal = document.querySelector(".modal__container");
const innerModal = document.querySelector(".modal")


btn.addEventListener('click', () => {
    modal.style.display = "flex"
}, true)

modal.addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className === 'modal__container') {
        modal.style.display = "none"
    }
})

