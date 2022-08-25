const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg",
    "images/slide5.jpg"
]

let indexUrl = 0;
const imgElement = document.getElementById("slider-img")
setInterval(() => {
    if(indexUrl>= images.length){
        indexUrl = 0;
    }
    const setUrl = images[indexUrl];
    imgElement.setAttribute("src", setUrl)
    indexUrl++;
},1000)
