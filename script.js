const nameInput = document.getElementById('name')
const passwordInput = document.getElementById('password')
const emailInput = document.getElementById('email')
const button = document.getElementById('button')

const inputFields = [nameInput, passwordInput, emailInput]
document.addEventListener('DOMContentLoaded', () => {
    inputFields.forEach(inputEl => {
        inputEl.previousElementSibling.classList.add('defaultOrEmptySpan')
    })
})
inputFields.forEach(inputEl => {
    const placeholder = inputEl.previousElementSibling
    inputEl.addEventListener('focus', () => {
        placeholder.classList.add('focusedOrFilledSpan')
    })

    inputEl.addEventListener('keydown', (ev) => {
        ev.key == 'Enter' && button.click()
    })
    inputEl.addEventListener('blur', () => {
        if (inputEl.value.length == 0) {
            placeholder.classList.remove('focusedOrFilledSpan')
            placeholder.classList.add('defaultOrEmptySpan')
        }
    })
})

button.addEventListener('click', () => {
    alert('Button clicked.')
})