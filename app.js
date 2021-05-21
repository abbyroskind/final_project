const scriptURL = 'https://script.google.com/macros/s/AKfycbyU4tQhV4rz_Y_Uje6pt91gZ-uaBuVbdeKQzUX8XQFUc_Es4q41y_Mb_XnK4V0yQT1u/exec'
const form = document.querySelector("form")
const modalInputs = document.querySelector("#modal-inputs")
let num = 0

window.addEventListener("scroll", (event) => {
  event.preventDefault()
  if (num == 0) {
    modal.style.display = "block" 
    num++
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .then(() => {
          //This is where you write your code

          const modal = document.querySelector("#modal")

          modal.style.display = "block"
          
          form.reset()

          //Do not alter below this line
      })
      .catch(error => console.error('Error!', error.message))
})

const close = document.querySelector("#close")

close.addEventListener('click', () =>{
  modal.style.display = "none"
})

window.addEventListener('click', (event) => {
  // event.preventDefault()
  if (event.target != modal) {
    modal.style.display = "none"
    }
})
            
const about = document.querySelector(".about")
// console.log(about)
const tabs = document.querySelectorAll(".tab-btn")
// console.log(tabs)
const tabContent = document.querySelectorAll(".about-content")
// console.log(tabContent)
const history = document.querySelector("#btn-history")
// console.log(history)
const context = document.querySelector("#btn-context")
// console.log(context)
const identity = document.querySelector("#btn-identity")
// console.log(identity)
const goals = document.querySelector("#btn-goals")
// console.log(goals)
const historyContent = document.querySelector("#history")
// console.log(historyContent)
const contextContent = document.querySelector("#context")
// console.log(contextContent)
const identityContent = document.querySelector("#identity")
// console.log(identityContent)
const goalsContent = document.querySelector("#goals")
// console.log(goalsContent)

history.addEventListener("click", () => {
  history.classList.add("active")
  history.style.display = "block"
  historyContent.style.display = "block"
  context.classList.remove("active")
  contextContent.style.display = "none"
  identity.classList.remove("active")
  identityContent.style.display = "none"
  goals.classList.remove("active")
  goalsContent.style.display = "none"
})

context.addEventListener("click", () => {
  context.classList.add("active")
  context.style.display = "block"
  contextContent.style.display = "block"
  history.classList.remove("active")
  historyContent.style.display = "none"
  identity.classList.remove("active")
  identityContent.style.display = "none"
  goals.classList.remove("active")
  goalsContent.style.display = "none"
})

identity.addEventListener("click", () => {
  identity.classList.add("active")
  identity.style.display = "block"
  identityContent.style.display = "block"
  history.classList.remove("active")
  historyContent.style.display = "none"
  context.classList.remove("active")
  contextContent.style.display = "none"
  goals.classList.remove("active")
  goalsContent.style.display = "none"
})

goals.addEventListener("click", () => {
  goals.classList.add("active")
  goals.style.display = "block"
  goalsContent.style.display = "block"
  identity.classList.remove("active")
  identityContent.style.display = "none"
  context.classList.remove("active")
  contextContent.style.display = "none"
  history.classList.remove("active")
  historyContent.style.display = "none"
})