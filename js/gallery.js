
//************gallery */
const imagesProto = document.querySelectorAll('.single-img')
const images = Array.from(imagesProto)
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
var currentIndex = 0;

images.forEach((img, index) => {
    //display modal
    img.addEventListener('click', () => {
        console.log('dsfdsfsd')
        displayImage(index);
    });
})

displayImage = (index) => {
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
        modalImg.src = imgSource
}

modal.addEventListener('click', (e) => {
    //close the modal if clicked outside of modal-image
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('modal-visible')
    }
})
   
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

leftArrow.addEventListener('click', () => {
   
})