const about = document.querySelector(".about"); // the whole thing in tabs
// console.log(about)
const btns = document.querySelectorAll(".tab-btn"); // each button
// console.log(btns)
const articles = document.querySelectorAll(".content"); // button's content
// console.log(articles)

about.addEventListener("click", (event) {
  const id = event.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});