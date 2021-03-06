
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
    document.body.style.overflow = 'hidden';
    console.log(index);
    console.log(images.length);
    if (index < 0) {
        return displayImage(images.length -2)
        
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
        
        description.classList.add('fade-in')
        modalImg.classList.add('fade-in')
        setTimeout(() => {
            
            
            description.classList.remove('fade-in')
            modalImg.classList.remove('fade-in')
        }, 900);
}

modal.addEventListener('click', (e) => {
    //close the modal if clicked outside of modal-image
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('modal-visible')
        document.body.style.overflow = null;
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

//info link
const link = document.querySelector('.infolink')
const info = document.querySelector('.gallery-info')
link.addEventListener('click', e=>{
    info.classList.toggle('hide')
    info.classList.toggle('info-animation')
})