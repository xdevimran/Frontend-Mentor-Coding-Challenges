const sharIcon = document.querySelector('.share-icon')
const shareElement = document.querySelector('.share-button')



sharIcon.addEventListener('click', () => {
    shareElement.classList.toggle('hide')
})