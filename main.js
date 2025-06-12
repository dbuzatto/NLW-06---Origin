/* Abre e fecha hamburger menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/* Fecha o menu ao clicar em um item do menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/* Muda o header quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Mostra o botão de voltar ao topo e verifica se está sobre o footer */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  const footer = document.querySelector('footer')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }

  const footerTop = footer.getBoundingClientRect().top
  const windowHeight = window.innerHeight

  if (footerTop < windowHeight) {
    backToTopButton.classList.add('footer-visible')
  } else {
    backToTopButton.classList.remove('footer-visible')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Event Listener para scroll */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/* Testimonials carousel slider Swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  speed: 600,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: animar elementos ao rolar */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .text, #home .image,
  #about .text, #about .image,
  #services .header, #services .card,
  #testimonials .header, #testimonials .testimonial,
  #contact .text, #contact .links, 
  footer .brand, footer .social
  `,
  { interval: 100 }
)
