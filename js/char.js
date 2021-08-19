const paragraphs = [...document.querySelectorAll('.scroll-animate')]



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
