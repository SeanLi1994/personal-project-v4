// import variables from '../css/main.scss';

// scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 3000,
    delay: 300,
    // reset: true
})

sr.reveal(`.home__title`)
sr.reveal(`.home__description`, {delay: 500})
sr.reveal(`.home__button`, {delay: 600})//??? clash with transition
sr.reveal(`.about__data, .contact__data`,{origin: 'left'})
sr.reveal(`.about__img, .contact__form`,{origin: 'right'})
sr.reveal(`.work__card, .footer__container`,{interval: 100, origin: 'bottom'})

//header show and shadow
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header-show');
    else header.classList.remove('scroll-header-show')
    if(this.scrollY >= 200) header.classList.add('scroll-header-shadow');
    else header.classList.remove('scroll-header-shadow')
}
window.addEventListener('scroll', scrollHeader)

//title blur
function scrollBlur(){
    const titleBlur = document.getElementById('home__characters-blur')
    if(this.scrollY >= 300) titleBlur.classList.add('home__character-blur');
    else titleBlur.classList.remove('home__character-blur')
}
window.addEventListener('scroll', scrollBlur)

//active nav items
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//show scroll up button
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



//work card change background
const cardItems = document.querySelectorAll('.work__card')

cardItems.forEach((item) =>{
    const cardImg = item.querySelector('.work__img')
    const imgSrc = cardImg.getAttribute("src")
    const arrSrc = imgSrc.split('.')
    // const imgSrc_new = "." + arrSrc[1] + ".2.png"

    cardImg.addEventListener('click', () =>{
        const bgArea = document.getElementById('works')
        // const titleColor = bgArea.querySelector('.section__title-center')
        const textColor = bgArea.querySelectorAll('.section__title-center, .work__title')
        
        if(arrSrc[3] == "dark") {
            const imgSrc_new = "." + arrSrc[1] + ".2.dark.png"
            bgArea.style.backgroundImage="url(" + imgSrc_new + ")";
            // textColor.style.color="#999"
            // titleColor.style.color="#999"
            textColor.forEach((item) =>{
                item.style.color="#999"
            })
        }

        else {
            const imgSrc_new = "." + arrSrc[1] + ".2.png"
            bgArea.style.backgroundImage="url(" + imgSrc_new + ")"
            textColor.forEach((item) =>{
                item.style.color="#191919"
            })
            // textColor.style.color=''
            // titleColor.style.color=''
        }
    })
})

//theme change
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    document.getElementById('works').style.backgroundImage=""

})