

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1200,
  reset: false
})

scrollReveal.reveal(
  `.head .container, .head .text-container,
  .music .container, .music .img02, .music .streamings, .music .balon,
  .experimente .container,
  .alexa .textarea, .alexa button, .alexa .img03,
  .detalhes .img04, .detalhes h2, .detalhes .container, .detalhes .button,
  .footer .container, .footer .second_container, .footer #logo`,
  { interval: 100 }
)