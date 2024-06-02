// function to mae pop up the image when clicking
document.querySelectorAll('.gallery-container img').forEach(image => {
    image.onclick =() =>{
        document.querySelector(".gallery-popup").style.display = "flex";
        document.querySelector(".gallery-popup .popup-item img").src = image.getAttribute("src");
    }
})

document.querySelector(".gallery-popup i").onclick = () =>{
    document.querySelector(".gallery-popup").style.display = "none";
}