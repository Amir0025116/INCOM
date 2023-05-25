const burger = document.querySelector('.burger'),
    info = document.querySelector('.burger-menu')


burger.addEventListener('click', function () {
    this.classList.toggle('active')
    info.classList.toggle('open')
})
