      // MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

      
      // MEnu Show 
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}
      // MEnu Hidden
if(navClose){
  navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu')
  })
}
      // REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

      // ALTERAR CABEÇALHO DE FUNDO 

const blurHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

// EMAIL JS 

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()
  //serviceId - templateId - #form - publickey
  emailjs.sendForm('service_lxmylwc', 'template_o7lhww4', '#contact-form', '0IAF7QkDpPJ1V2zai')
    .then(() => {
      //Aprovação de Sucesso 
      contactMessage.textContent = 'Mensagem enviada com sucesso! ✅'

      //Remove mensagem 5 segundos depois 
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)

      //Limpar o input 
      contactForm.reset()
    }, () => {
      // Mensagem de erro
      contactMessage.textContent = 'Mensagem não enviada (erro do servidor) ❌'   
    })
}

contactForm.addEventListener('submit', sendEmail)

// SHOW SCROLL UP 

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// SCROLL SELECIONADO POR LINK 

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href="#' + sectionId + '"]'); // Adiciona aspas ao redor do sectionId

    if (sectionsClass) { // Verifica se sectionsClass não é nulo
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
};

window.addEventListener('scroll', scrollActive);

// SCROLL REVEAL ANIMAÇÃO 

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true 
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {intervalo: 1000})