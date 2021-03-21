const quiz_text = document.getElementById('quiz-text')
const a_text = document.getElementById('a_lab');
const b_text = document.getElementById('b_lab');
const c_text = document.getElementById('c_lab');
const d_text = document.getElementById('d_lab');
const btnNext = document.getElementById('btn-next');
const answersEl = document.querySelectorAll('.answer');
const quizContainer = document.querySelector('.quiz-container')

let currenQuiz = 0;
let score = 0;

loudQuiz()

function loudQuiz(){
   diSelectAnswers()

   currenQuizData = quisData[currenQuiz];
   quiz_text.innerText = currenQuizData.quistion;
   a_text.innerText = currenQuizData.a;
   b_text.innerText = currenQuizData.b;
   c_text.innerText = currenQuizData.c;
   d_text.innerText = currenQuizData.d;
}

function getSelected(){

   let answercheck = undefined;

   answersEl.forEach(answer =>{
      if(answer.checked){
         answercheck = answer.id;
      }
   })

   return answercheck;
}

function diSelectAnswers(){
   answersEl.forEach(answer =>{
      answer.checked = false;
   })
}

btnNext.addEventListener('click',()=>{
   const answer = getSelected();
   if(answer){
      if(answer === quisData[currenQuiz].corect){
         score++;
      }
      currenQuiz++;
      if(currenQuiz < quisData.length){
         loudQuiz();
      }else{
         quizContainer.innerHTML = `<h2>You answered correctly at <span>${score}/${quisData.length}</span> quistions.</h2><button onclick="location.reload()">Reload</button>`
         quizContainer.classList.add('quisetions')
         if (score <= Math.round(quisData.length / 2)) {
            document.querySelector('.quisetions span').classList.add('loser')
         } else {
            document.querySelector('.quisetions span').classList.add('wener')
         }
      }
   }
})