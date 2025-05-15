export default function miscEvents() {
    const tuxBtn = document.getElementById('tux')
    const profileBtn = document.getElementById('profile')
    const sb_left = document.getElementById('sidebar-left')
    const sb_right = document.getElementById('sidebar-right')
    //sidebar toggles

    tuxBtn.addEventListener('click', (e) => {
        e.preventDefault()
        sb_left.classList.toggle('-translate-x-full') // Hide/show by sliding
        sb_left.classList.toggle('opacity-0') // Fade in/out
    })
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault()
        sb_right.classList.toggle('translate-x-full') // Hide/show by sliding
        sb_right.classList.toggle('opacity-0') // Fade in/out
    })
}
