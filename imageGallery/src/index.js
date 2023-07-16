import "./style.css";
import { faker } from '@faker-js/faker';

(
    async function () {
        const main = document.querySelector("main");

        const loader = document.querySelector(".loader");
        const overlay = document.querySelector(".overlay");
        const imageModal = document.querySelector(".image__modal")
        const modalContainer = document.querySelector(".modal__container")
        let numberOfImages = 50;
        const images = [];
        let selectedId = '';
        let selectedImage;

        function loadImages(num) {
            for (let i = 0; i < num; i++) {
                images.push({ picture: faker.image.urlLoremFlickr({ category: 'nature' }), id: new Date().toISOString() + Math.random() })
            }
            console.log(images)

            renderImages()
        }

        function renderImages() {
            main.innerHTML = "";
            images.forEach((image, idx) => {
                const imgContainer = document.createElement("div");
                const img = document.createElement("img");
                img.src = image.picture
                imgContainer.append(img)
                img.setAttribute("id", image.id)
                imgContainer.classList.add("image__container")
                // imgContainer.innerHTML = `<img src=${image.url} alt=${image.title}>`
                main.append(imgContainer)

                if (image.id === selectedId) {
                    console.log(image)
                    selectedImage = image;
                    openModal()
                }
            });

        }

        function lazyLoading(delay) {
            loader.style.display = "flex";
            overlay.style.backgroundColor = "rgb(246, 246, 246)";
            overlay.style.opacity = "0.3";

            setTimeout(() => {
                loadImages(numberOfImages);
                loader.style.display = "none";
                overlay.style.backgroundColor = "white";
                overlay.style.opacity = "1"
            }, delay)

        }

        window.addEventListener("scroll", () => {
            console.log(document.documentElement.scrollHeight, Math.ceil(Math.ceil(window.scrollY + window.innerHeight)))
            if (document.documentElement.scrollHeight === Math.ceil(window.scrollY + window.innerHeight)) {
                numberOfImages = 20;
                lazyLoading(2000)
            }
        })


        function openModal() {
            console.log(selectedId)
            imageModal.innerHTML = ""
            modalContainer.style.display = "flex";
            const img = document.createElement('img');
            img.src = selectedImage.picture;
            const imgId = document.createElement('h3');
            overlay.style.backgroundColor = "#f7f7f7";
            overlay.style.opacity = "0.3"
            imgId.innerText = selectedImage.id
            imageModal.append(img)
            imageModal.append(imgId)
        }

        // open full image
        main.addEventListener('click', (e) => {
            if (e.target.tagName === "IMG") {
                selectedId = e.target.id;
                renderImages();
            }
        })

        modalContainer.addEventListener("click", (e) => {
            console.log(e.target)
            overlay.style.backgroundColor = "white";
            overlay.style.opacity = "1";
            modalContainer.style.display = "none";
            selectedId = ''


        })

        window.onbeforeunload = function () {
            window.scrollTo(0, 0)
        }

        loadImages(numberOfImages)

    }
)()

