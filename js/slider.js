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





// const images = [
//     "images/slide1.webp",
//     "images/slide2.webp",
//     "images/slide3.webp",
// ]
// let imageIndex = 0;
// const imageElement = document.getElementById("slider-img")
// setInterval(() => {
//     if(imageIndex>=images.length){
//         imageIndex = 0;
//     }
//     const imgUrl = images[imageIndex];
//     imageElement.setAttribute("src", imgUrl)
//     imageIndex++;
//     console.log(imageIndex)
// },1000)