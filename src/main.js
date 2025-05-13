import './style.css'

// misc preventDefault on svg click
import miscEvents from './utils/navbar_events'
miscEvents()
document.querySelectorAll('.drop-down-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const contentId = button.getAttribute('data-controls')
        const contentElement = document.getElementById(contentId)
        if (contentElement) {
            // Simple toggle based on display - for a real app, use a class or 'hidden' attribute
            const isOpen = contentElement.classList.toggle('open')

            // ARIA (optional but good for accessibility)
            button.setAttribute('aria-expanded', isOpen)

            // Hide other dropdowns
            document
                .querySelectorAll('.drop-down-content.open')
                .forEach((openContent) => {
                    if (openContent !== contentElement) {
                        openContent.classList.remove('open')
                        // Find its button and update aria-expanded
                        const otherButton = document.querySelector(
                            `.drop-down-btn[data-controls="${openContent.id}"]`
                        )
                        if (otherButton)
                            otherButton.setAttribute('aria-expanded', 'false')
                    }
                })
        }
    })
})

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const openDropdowns = document.querySelectorAll('.drop-down-content.open')
    openDropdowns.forEach((dropdownContent) => {
        const wrapper = dropdownContent.closest('.dropdown-wrapper')
        if (wrapper && !wrapper.contains(event.target)) {
            dropdownContent.classList.remove('open')
            const button = wrapper.querySelector('.drop-down-btn')
            if (button) button.setAttribute('aria-expanded', 'false')
        }
    })
})
