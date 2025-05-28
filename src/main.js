import './style.css'
import miscEvents from './utils/navbar_events'
import imgCarousel from './utils/image_carousel'
// stop flashing
const tuxPng = document.getElementById('tuxPNG')
tuxPng.addEventListener('load', () => {
    tuxPng.style.display = 'block'
})
const profilePNG = document.getElementById('profilePNG')
profilePNG.addEventListener('load', () => {
    profilePNG.style.display = 'block'
})
miscEvents()
imgCarousel()
