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
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

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

/* Event Listener para scroll */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
})

/* Testimonials carousel slider Swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
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
