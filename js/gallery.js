
//************gallery */
const imagesProto = document.querySelectorAll('.single-img')
const images = Array.from(imagesProto)
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
var currentIndex = 0;

images.forEach((img, index) => {
    //display modal
    img.addEventListener('click', () => {
        
        displayImage(index);
    });
})

const displayImage = (index) => {
    console.log(index);
    if (index < 0) {
        displayImage(images.length -2)
        return;
    }
    if (index >= images.length -1) {
        displayImage(0)
        return;
    }
    currentIndex = index;
    modal.classList.add('modal-visible')
        //load clicked img in modal
        const imgSource = images[index].getAttribute('src')
        const description = modal.querySelector('.image-description')
        description.textContent = images[index].getAttribute('alt')
        modalImg.src = imgSource
}

modal.addEventListener('click', (e) => {
    //close the modal if clicked outside of modal-image
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('modal-visible')
    }
})
   
document.addEventListener('keydown', e=>{
   console.log(e.key);
   if(e.key === "Escape"){
    modal.classList.remove('modal-visible')
   }
   if(e.key === "ArrowRight"){
     displayImage(currentIndex -1)
   }
   if(e.key === "ArrowLeft"){
     displayImage(currentIndex +1)
   }
})