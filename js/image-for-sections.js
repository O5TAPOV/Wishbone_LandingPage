const imageSections = document.querySelectorAll(".image-section");
const images = [
    "../img/image-section/1.png",
    "../img/image-section/2.png",
    "../img/image-section/3.png"
];

imageSections.forEach((section, index) => {
    section.style.backgroundImage = `url(${images[index]})`;
});