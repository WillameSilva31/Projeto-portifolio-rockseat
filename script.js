function handleSwitch() {
    const html = document.documentElement

    html.classList.toggle('light')


    const img = document.querySelector('img#img')
    if(html.classList.contains('light')){
        img.setAttribute('src','./assets/AvatarL.png')
    } else {
        img.setAttribute('src','./assets/Avatar.png')
    }
}