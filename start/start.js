const quizzes = document.querySelectorAll(".quiz")
const btn = document.querySelector(".btn")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal-wrapper")

btn.addEventListener("click", ()=>{
    modal.classList.add("show")
})

overlay.addEventListener("click", ()=>{
    modal.classList.remove("show")
})

quizzes.forEach(quiz => {
    quiz.addEventListener("click", ()=>{
        quizzes.forEach(el => {
            el.classList.remove("active")
        })
        quiz.classList.add("active")
        if(quiz.classList.contains("active")){
            btn.disabled = false
        }
    })
})
