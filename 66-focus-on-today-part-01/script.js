const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLebel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const completedgoals = [...inputFields].every(function (input) {
            return input.value
        })
        if (completedgoals) {
            checkbox.parentElement.classList.toggle('completed')
        } else {
            progressBar.classList.add('show-error')
        }
    })
})
inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })
})