export default function miscEvents() {
    //sidebar toggles
    const leftSidebarAside = document.querySelector('#sidebar-left')
    const rightSidebarAside = document.querySelector('#sidebar-right')
    const tuxBtn = document.querySelector('.tux')
    const profileBtn = document.querySelector('.profile')
    tuxBtn.addEventListener('click', (e) => {
        e.preventDefault()
        leftSidebarAside.style.display =
            leftSidebarAside.style.display === 'block' ? 'none' : 'block'
    })
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault()
        rightSidebarAside.style.display =
            rightSidebarAside.style.display === 'block' ? 'none' : 'block'
    })
}
