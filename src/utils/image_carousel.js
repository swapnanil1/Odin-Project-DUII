export default function imgCarousel() {
    let count = 0
    const leftICBtn = document.getElementById('ic-left')
    const rightICBtn = document.getElementById('ic-right')
    rightICBtn.addEventListener('click', () => {
        count++
        if (count > 3) {
            count = 0
        }
        displayImg(count)
    })
    leftICBtn.addEventListener('click', () => {
        count--
        if (count < 0) {
            count = 3
        }
        displayImg(count)
    })
    displayImg(0) // intialize or all of them are displayed
}
function displayImg(n) {
    let count = 0
    const imgArray = document.querySelectorAll('div.carousel-track img')
    imgArray.forEach((img) => {
        if (n === count) {
            img.classList.add('opacity-100')
            img.classList.remove('hidden')
        } else {
            img.classList.remove('opacity-100')
            img.classList.add('hidden')
        }
        count++
    })
}
