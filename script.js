function togglemode() {
    const html = document.documentElement
    html.classList.toggle('light')

    let img = document.querySelector('#perfil img')
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/perfilwhite.jpg')
        img.setAttribute('alt', 'Foto de perfil colorida')
    } else {
        img.setAttribute('src', './assets/perfilblack.jpg')
        img.setAttribute('alt', 'Foto de perfil em preto e branco')
    }
}