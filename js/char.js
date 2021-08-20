const paragraphs = [...document.querySelectorAll('.scroll-animate')]

if(window.innerWidth > 800){
    paragraphs[0].classList.add('show-text')
    paragraphs[1].classList.add('show-text')
    paragraphs[2].classList.add('show-text')
}

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
