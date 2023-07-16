import "./styles/normalize.css";
import "./styles/rating.css"

const stars = document.querySelectorAll("i");
const container = document.querySelector(".container")
let selectedStar = false;

container.addEventListener('click', (e) => {
    selectedStar = true
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].id <= e.target.id) {
            stars[i].style.color = "rgb(255, 255, 43)"
        }
        else {
            stars[i].style.color = "rgb(186, 186, 181)"

        }
    }
})


container.addEventListener('mouseover', (e) => {
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].id <= e.target.id && selectedStar === false) {

            stars[i].style.color = "rgba(242, 242, 93, 0.877)"
        }
    }
})
container.addEventListener('mouseout', (e) => {
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].id <= e.target.id && selectedStar === false) {

            stars[i].style.color = "rgb(186, 186, 181)"
        }
    }
})


