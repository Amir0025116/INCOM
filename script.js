const burger = document.querySelector('.burger'),
    info = document.querySelector('.burger-menu')


burger.addEventListener('click', function () {
     document.querySelector('body').classList.toggle('scroll')
    this.classList.toggle('active')
    info.classList.toggle('open')
})
