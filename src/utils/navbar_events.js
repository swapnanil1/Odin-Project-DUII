export default function miscEvents() {
    const tuxBtn = document.getElementById('tux')
    const profileBtn = document.getElementById('profile')
    const sb_left = document.getElementById('sidebar-left')
    const sb_right = document.getElementById('sidebar-right')
    //sidebar toggles

    tuxBtn.addEventListener('click', (e) => {
        e.preventDefault()
        sb_left.style.display =
            sb_left.style.display === 'none' ? 'inline-block' : 'none'
    })
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault()
        sb_right.style.display =
            sb_right.style.display === 'none' ? 'inline-block' : 'none'
    })
}
