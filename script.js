// const toogles = document.querySelectorAll('.faq-toogle')

// toogles.forEach(toogle => {
//     toogle.addEventListener('click', (event)=>{
//     console.log(event);
//     toogle.parentNode.classList.toogle('active')
//     })
// })

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})