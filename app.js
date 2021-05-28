const scriptURL = 'https://script.google.com/macros/s/AKfycbyU4tQhV4rz_Y_Uje6pt91gZ-uaBuVbdeKQzUX8XQFUc_Es4q41y_Mb_XnK4V0yQT1u/exec'
const form = document.querySelector("form")
const modalInputs = document.querySelector("#modal-inputs")
let num = 0

window.addEventListener("scroll", () => {
  if (num == 0) {
    modal.style.display = "block" 
    num++
  }
})

// form.addEventListener('submit', (e) => {
//   e.preventDefault(e)
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .then(() => {
//           //This is where you write your code

//           const modal = document.querySelector("#modal")

//           modal.style.display = "block"
          
//           form.reset()

//           //Do not alter below this line
//       })
//       .catch(error => console.error('Error!', error.message))
// })

const close = document.querySelector(".close")

close.addEventListener('click', () =>{
  modal.style.display = "none"
})



// Counter


// Counter Option 1 - jQuery (don't need span = 0, actual number in the HTML)

const stats = document.querySelector(".stats")

stats.addEventListener("mouseenter", (e) => {
  e.preventDefault(e)
  $(".numbers").each(function () {
    var $this = $(this)
    jQuery({ counter: 0 }).animate({ counter: $this.text() }, {
        duration: 6000,
        easing: "swing",
        step: function () {
            $this.text(Math.ceil(this.counter))
        }
    })
  })
}, {once:true})


// Counter Option 2 (need span = 0, "akhi" defines number)

// const stats = document.querySelector(".stats")

// stats.addEventListener("mouseenter", (e) => {
//   e.preventDefault()
//   const counters = document.querySelectorAll(".numbers")
//   const speed = 1000

//   counters.forEach(counter => {
//     const animate = () => {
//     const value = +counter.getAttribute("akhi")
//     const data = +counter.innerText

//       const time = value / speed
//       if(data < value) {
//         counter.innerText = Math.ceil(data + time)
//         setTimeout(animate, 5)
//       } else {
//       counter.innerText = value
//       }
    
//     }

//     animate()
//   })
// })

// Counter Option 3

// const right = document.querySelector("#crunch")
// const stats = document.querySelector(".stats")

// stats.addEventListener("mouseenter", (e) => {
//   e.preventDefault()
//   const counters = document.querySelectorAll(".numbers")
//   let speed = 200

//   counters.forEach(counter => {
//     const animate = () => {
//     const value = +counter.getAttribute("akhi")
//     const data = +counter.innerText

//       const time = value / speed
//         if(data < value) {
//           counter.innerText = Math.ceil(data + time)
//         setTimeout(animate, 5)
//         } else {
//         counter.innerText = value
//         }
    
//       }

//       animate()
//     })
// })

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

const nyt = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=IBlpph2mOrnORySRWm9KbvUKXEcUZDwh"
const nytFeed = document.getElementById("nyt-feed")

fetch(`${nyt}`)
  .then(res => res.json())
  .then(res => {
    console.log(res)

    let headerOneContainer = document.querySelector("#header-one")
    let headerTwoContainer = document.querySelector("#header-two")
    let headerThreeContainer = document.querySelector("#header-three")
    let headerFourContainer = document.querySelector("#header-four")

    let headerOne = res.results[3].section
    headerOneContainer.innerText = headerOne.toUpperCase()
    let headerTwo = res.results[17].section
    headerTwoContainer.innerText = headerTwo.toUpperCase()
    let headerThree = res.results[8].section
    headerThreeContainer.innerText = headerThree.toUpperCase()
    let headerFour = res.results[10].section
    headerFourContainer.innerText = headerFour.toUpperCase()

    let titleOneContainer = document.querySelector("#card-title-one")
    let titleTwoContainer = document.querySelector("#card-title-two")
    let titleThreeContainer = document.querySelector("#card-title-three")
    let titleFourContainer = document.querySelector("#card-title-four")

    let titleOne = res.results[3].title
    titleOneContainer.innerText = titleOne
    let titleTwo = res.results[17].title
    titleTwoContainer.innerText = titleTwo
    let titleThree = res.results[8].title
    titleThreeContainer.innerText = titleThree
    let titleFour = res.results[10].title
    titleFourContainer.innerText = titleFour

    let descriptionOneContainer = document.querySelector("#description-one")
    let descriptionTwoContainer = document.querySelector("#description-two")
    let descriptionThreeContainer = document.querySelector("#description-three")
    let descriptionFourContainer = document.querySelector("#description-four")

    let descriptionOne = res.results[3].abstract
    descriptionOneContainer.innerText = descriptionOne
    let descriptionTwo = res.results[17].abstract
    descriptionTwoContainer.innerText = descriptionTwo
    let descriptionThree = res.results[8].abstract
    descriptionThreeContainer.innerText = descriptionThree 
    let descriptionFour = res.results[10].abstract
    descriptionFourContainer.innerText = descriptionFour

    let hyperlinkOneContainer = document.querySelector("#hyperlink-one")
    let hyperlinkTwoContainer = document.querySelector("#hyperlink-two")
    let hyperlinkThreeContainer = document.querySelector("#hyperlink-three")
    let hyperlinkFourContainer = document.querySelector("#hyperlink-four")

    let hyperlinkOne = res.results[3].short_url
    hyperlinkOneContainer.setAttribute("href", hyperlinkOne)
    hyperlinkOneContainer.setAttribute("target", "_blank")

    let hyperlinkTwo = res.results[17].short_url
    hyperlinkTwoContainer.setAttribute("href", hyperlinkTwo) 
    hyperlinkTwoContainer.setAttribute("target", "_blank")
    
    let hyperlinkThree = res.results[8].short_url
    hyperlinkThreeContainer.setAttribute("href", hyperlinkThree)
    hyperlinkThreeContainer.setAttribute("target", "_blank")

    let hyperlinkFour = res.results[10].short_url
    hyperlinkFourContainer.setAttribute("href", hyperlinkFour)
    hyperlinkFourContainer.setAttribute("target", "_blank")
  })

  const hamburger = document.querySelector("#hamburger")
  const hiddenMenu = document.querySelector("#hidden-menu")
  const farRightClose = document.querySelector("#far-right-close")
  const navLinks = document.querySelector("#links")

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      hamburger.style.display = "block"
      navLinks.style.display = "none"
    } else {
      hamburger.style.display = "none"
      navLinks.style.display = "block"
    }
  })

  hamburger.addEventListener("click", () => {

    hiddenMenu.classList.remove("animate__animated", "animate__fadeOutRight")
    hiddenMenu.classList.add("animate__animated", "animate__fadeInRight")
    hiddenMenu.style.display = "block"
    hamburger.style.display = "none"

  })

  farRightClose.addEventListener("click", () => {

    hiddenMenu.classList.remove("animate__animated", "animate__fadeInRight")
    hiddenMenu.classList.add("animate__animated", "animate__fadeOutRight")

    hamburger.style.display = "block"

  })
