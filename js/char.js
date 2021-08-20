const paragraphs = [...document.querySelectorAll('.scroll-animate')]

setTimeout(() => {
    if(window.innerWidth > 800){
        paragraphs[0].classList.add('show-text')
        paragraphs[1].classList.add('show-text')
        setTimeout(() => {
            paragraphs[2].classList.add('show-text')
            
        }, 250);
    }
}, 1000);


document.addEventListener('scroll', e=>{
    console.log(window.scrollY);
    const currentElement = paragraphs.find(p => p.getBoundingClientRect().top <  window.innerHeight - 150  && !p.classList.contains('show-text'))
    if(!currentElement){
        return
    }
    if(currentElement.classList.contains('show-text')){
        return
    }
    currentElement.classList.add('show-text')
})
